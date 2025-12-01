import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';

interface UserPaginationOptions extends IPaginationOptions {
  search?: string;
  searchField?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | null> {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      const user = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });
      return await this.userRepository.save(user);
    } catch {
      return null;
    }
  }

  async findOne(id: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch {
      return null;
    }
  }

  async findByUsername(username: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { username } });
    } catch {
      return null;
    }
  }

  async findAll(
    options: UserPaginationOptions,
    isActive?: boolean,
  ): Promise<Pagination<User>> {
    const { search, searchField, sortBy, sortOrder, page, limit } = options;

    const qb = this.userRepository.createQueryBuilder('user');

    const allowedSearchFields = ['username', 'email'];
    const allowedSortFields = ['id', 'username', 'createdAt'];

    if (typeof isActive === 'boolean') {
      qb.andWhere('user.isActive = :isActive', { isActive });
    }

    if (search && searchField && allowedSearchFields.includes(searchField)) {
      qb.andWhere(`LOWER(user.${searchField}) LIKE :search`, {
        search: `%${search.toLowerCase()}%`,
      });
    }

    const orderField =
      sortBy && allowedSortFields.includes(sortBy) ? sortBy : 'id';
    const orderDirection: 'ASC' | 'DESC' =
      sortOrder === 'DESC' ? 'DESC' : 'ASC';

    qb.orderBy(`user.${orderField}`, orderDirection);

    return paginate<User>(qb, { page, limit });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) return null;

      if (updateUserDto.password) {
        updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
      }

      Object.assign(user, updateUserDto);
      return this.userRepository.save(user);
    } catch {
      return null;
    }
  }

  async remove(id: string): Promise<User | null> {
    try {
      const user = await this.findOne(id);
      if (!user) return null;
      return await this.userRepository.remove(user);
    } catch {
      return null;
    }
  }

  async updateProfile(id: string, filename: string): Promise<User | null> {
    try {
      const user = await this.findOne(id);
      if (!user) return null;

      user.profile = filename;
      return await this.userRepository.save(user);
    } catch {
      return null;
    }
  }
}

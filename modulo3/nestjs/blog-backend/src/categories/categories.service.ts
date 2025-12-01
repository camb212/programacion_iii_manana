import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category | null> {
    try {
      const category = this.categoryRepo.create(dto);
      return await this.categoryRepo.save(category);
    } catch (err) {
      return null;
    }
  }

  async findAll(options: {
    page: number;
    limit: number;
    search?: string;
    searchField?: string;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
  }): Promise<Pagination<Category>> {
    const {
      page,
      limit,
      search,
      searchField = 'name',
      sortBy = 'id',
      sortOrder = 'ASC',
    } = options;

    const query = this.categoryRepo.createQueryBuilder('category');

    if (search && search.trim() !== '') {
      query.andWhere(`LOWER(category.${searchField}) LIKE :search`, {
        search: `%${search.toLowerCase()}%`,
      });
    }

    query.orderBy(`category.${sortBy}`, sortOrder);

    return paginate<Category>(query, { page, limit });
  }

  async findOne(id: string): Promise<Category | null> {
    try {
      return await this.categoryRepo.findOne({ where: { id } });
    } catch (err) {
      return null;
    }
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category | null> {
    try {
      const category = await this.findOne(id);
      if (!category) return null;

      Object.assign(category, dto);
      return await this.categoryRepo.save(category);
    } catch (err) {
      return null;
    }
  }

  async remove(id: string): Promise<Category | null> {
    try {
      const category = await this.findOne(id);
      if (!category) return null;

      return await this.categoryRepo.remove(category);
    } catch (err) {
      return null;
    }
  }
}









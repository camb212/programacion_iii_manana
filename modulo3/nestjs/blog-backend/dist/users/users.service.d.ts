import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(options: IPaginationOptions): Promise<Pagination<User>>;
    findOne(id: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User | null>;
    remove(id: string): Promise<User | null>;
}

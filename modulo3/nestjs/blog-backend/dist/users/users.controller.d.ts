import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(page?: number, limit?: number): Promise<Pagination<User>>;
    findOne(id: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User | null>;
    remove(id: string): Promise<User | null>;
}

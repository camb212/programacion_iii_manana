import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<SuccessResponseDto<import("./user.entity").User | null>>;
    findAll(page?: number, limit?: number, search?: string, searchField?: string, sortBy?: string, sortOrder?: 'ASC' | 'DESC'): Promise<SuccessResponseDto<import("nestjs-typeorm-paginate").Pagination<import("./user.entity").User, import("nestjs-typeorm-paginate").IPaginationMeta>>>;
    findOne(id: string): Promise<SuccessResponseDto<import("./user.entity").User>>;
    update(id: string, dto: UpdateUserDto): Promise<SuccessResponseDto<import("./user.entity").User>>;
    remove(id: string): Promise<SuccessResponseDto<import("./user.entity").User>>;
    uploadProfile(id: string, file: Express.Multer.File): Promise<SuccessResponseDto<import("./user.entity").User>>;
}

import { Repository } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesService {
    private readonly categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    create(dto: CreateCategoryDto): Promise<Category | null>;
    findAll(options: {
        page: number;
        limit: number;
        search?: string;
        searchField?: string;
        sortBy?: string;
        sortOrder?: 'ASC' | 'DESC';
    }): Promise<Pagination<Category>>;
    findOne(id: string): Promise<Category | null>;
    update(id: string, dto: UpdateCategoryDto): Promise<Category | null>;
    remove(id: string): Promise<Category | null>;
}

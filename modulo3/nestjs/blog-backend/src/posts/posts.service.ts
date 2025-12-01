import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Category } from '../categories/category.entity';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

interface PostPaginationOptions extends IPaginationOptions {
  search?: string;
  searchField?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const category = await this.categoryRepository.findOne({
      where: { id: createPostDto.categoryId }
    });

    if (!category) throw new NotFoundException('Categoría no encontrada');

    const post = this.postRepository.create({
      title: createPostDto.title,
      content: createPostDto.content,
      category,
    });

    return this.postRepository.save(post);
  }

  async findAll(options: PostPaginationOptions): Promise<Pagination<Post>> {
    const { search, searchField, sortBy, sortOrder } = options;

    const queryBuilder = this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.category', 'category');

    const allowedSearchFields = ['title', 'content'];
    const allowedSortFields = ['id', 'title', 'createdAt'];

    // Búsqueda
    if (search && searchField && allowedSearchFields.includes(searchField)) {
      queryBuilder.andWhere(
        `LOWER(post.${searchField}) LIKE :search`,
        { search: `%${search.toLowerCase()}%` },
      );
    }

    // Ordenamiento
    const orderField =
      sortBy && allowedSortFields.includes(sortBy) ? sortBy : 'id';

    const orderDirection: 'ASC' | 'DESC' =
      sortOrder === 'DESC' ? 'DESC' : 'ASC';

    queryBuilder.orderBy(`post.${orderField}`, orderDirection);

    return paginate<Post>(queryBuilder, {
      page: options.page,
      limit: options.limit,
    });
  }

  async findOne(id: string) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!post) throw new NotFoundException('Post no encontrado');

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!post) throw new NotFoundException('Post no encontrado');

    if (updatePostDto.categoryId) {
      const category = await this.categoryRepository.findOne({
        where: { id: updatePostDto.categoryId },
      });

      if (!category) throw new NotFoundException('Categoría no encontrada');

      post.category = category;
    }

    Object.assign(post, updatePostDto);
    return this.postRepository.save(post);
  }

  async remove(id: string) {
    const post = await this.postRepository.findOne({ where: { id } });

    if (!post) throw new NotFoundException('Post no encontrado');

    return this.postRepository.remove(post);
  }
}

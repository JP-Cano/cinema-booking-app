import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MoviesUseCase } from '../../../../../domain/usecases/movies/MoviesUseCase';
import { MovieDto } from '../../dto/movies/MovieDto';

@ApiTags('Movies')
@Controller({ path: 'api/movies' })
export class MovieController {
  constructor(private readonly moviesUseCase: MoviesUseCase) {}

  @Post()
  public async create(@Body() data: MovieDto): Promise<MovieDto> {
    try {
      return await this.moviesUseCase.create(data);
    } catch (e) {
      return e.message;
    }
  }

  @Get()
  public async getAll(): Promise<MovieDto[]> {
    try {
      return await this.moviesUseCase.findAll();
    } catch (e) {
      return e.message;
    }
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<MovieDto> {
    try {
      return await this.moviesUseCase.findById(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Delete(':id')
  public async deleteById(@Param('id') id: string): Promise<string> {
    try {
      await this.moviesUseCase.deleteById(id);
      return 'Movie deleted successfully';
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Put(':id')
  public async updateById(
    @Param('id') id: string,
    @Body() data: MovieDto,
  ): Promise<MovieDto> {
    try {
      return await this.moviesUseCase.updateById(id, data);
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }
}

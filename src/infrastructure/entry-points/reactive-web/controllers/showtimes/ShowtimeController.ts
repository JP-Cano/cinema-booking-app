import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShowtimeUseCase } from '../../../../../domain/usecases/showtimes/ShowtimeUseCase';
import { ShowtimeDto } from '../../dto/showtimes/ShowtimeDto';

@ApiTags('Showtime')
@Controller({ path: 'api/showtime' })
export class ShowtimeController {
  constructor(private readonly showtimeUseCase: ShowtimeUseCase) {}

  @Post()
  public async create(@Body() data: ShowtimeDto): Promise<ShowtimeDto> {
    try {
      return await this.showtimeUseCase.create(data);
    } catch (e) {
      return e.message;
    }
  }

  @Get()
  public async getAll(): Promise<ShowtimeDto[]> {
    try {
      return await this.showtimeUseCase.findAll();
    } catch (e) {
      return e.message;
    }
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<ShowtimeDto> {
    try {
      return await this.showtimeUseCase.findById(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Put(':id')
  public async updateById(
    @Param('id') id: string,
    @Body() data: Partial<ShowtimeDto>,
  ): Promise<ShowtimeDto> {
    try {
      return await this.showtimeUseCase.updateById(id, data);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}

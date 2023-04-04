import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookingUseCase } from '../../../../../domain/usecases/bookings/BookingUseCase';
import { BookingDto } from '../../dto/bookings/BookingDto';

@ApiTags('Bookings')
@Controller({ path: 'api/booking' })
export class BookingController {
  constructor(private readonly bookingUseCase: BookingUseCase) {}

  @Post()
  public async create(@Body() data: BookingDto): Promise<BookingDto> {
    try {
      return await this.bookingUseCase.create(data);
    } catch (e) {
      return e.message;
    }
  }

  @Get()
  public async getAll(): Promise<BookingDto[]> {
    try {
      return await this.bookingUseCase.findAll();
    } catch (e) {
      return e.message;
    }
  }

  @Get(':id')
  public async getById(@Param('id') id: string): Promise<BookingDto> {
    try {
      return await this.bookingUseCase.findById(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Get('user/:userId')
  public async getByUserId(
    @Param('userId') userId: string,
  ): Promise<BookingDto> {
    try {
      return await this.bookingUseCase.findByUserId(userId);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  @Delete(':id')
  public async deleteById(@Param('id') id: string): Promise<string> {
    try {
      await this.bookingUseCase.deleteById(id);
      return 'Booking deleted successfully';
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}

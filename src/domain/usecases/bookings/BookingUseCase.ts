import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Booking } from '../../models/bookings/Booking';
import { KEY } from '../../models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../models/gateways/base/IBaseRepositoryAdapter';
import { IBaseUseCase } from '../interfaces/base/IBaseUseCase';
import { UserUseCase } from '../users/UserUseCase';

@Injectable()
export class BookingUseCase implements IBaseUseCase<Booking, string> {
  constructor(
    @Inject(KEY.BOOKING_REPOSITORY)
    private readonly bookingRepository: IBaseRepositoryAdapter<Booking, string>,
    @Inject(forwardRef(() => UserUseCase))
    private readonly userUseCase: UserUseCase,
  ) {}

  public async create(data: Booking): Promise<Booking> {
    try {
      return await this.bookingRepository.create(data);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async deleteById(id: string): Promise<void> {
    try {
      const booking = await this.findById(id);
      await this.bookingRepository.deleteById(booking.id);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async findAll(): Promise<Booking[]> {
    try {
      return await this.bookingRepository.findAll();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async findById(id: string): Promise<Booking> {
    const booking = await this.bookingRepository.findById(id);
    if (booking === null) {
      throw new Error('Booking not found');
    }
    return booking;
  }

  public async findByUserId(id: string): Promise<Booking> {
    const user = await this.userUseCase.findById(id);
    return this.bookingRepository.findByUserId(user.id);
  }

  public async updateById(
    id: string,
    data: Partial<Booking>,
  ): Promise<Booking> {
    const booking = await this.findById(id);
    return this.bookingRepository.updateById(booking.id, data);
  }
}

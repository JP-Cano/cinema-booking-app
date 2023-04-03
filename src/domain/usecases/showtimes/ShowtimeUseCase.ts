import { Inject } from '@nestjs/common';
import { KEY } from '../../models/commons/enums/Key';
import { IBaseRepositoryAdapter } from '../../models/gateways/base/IBaseRepositoryAdapter';
import { Showtime } from '../../models/showtimes/Showtime';
import { IBaseUseCase } from '../interfaces/base/IBaseUseCase';

export class ShowtimeUseCase implements IBaseUseCase<Showtime, string> {
  constructor(
    @Inject(KEY.SHOWTIME_REPOSITORY)
    private readonly showtimeRepository: IBaseRepositoryAdapter<
      Showtime,
      string
    >,
  ) {}

  public async create(data: Showtime): Promise<Showtime> {
    try {
      return await this.showtimeRepository.create(data);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async findAll(): Promise<Showtime[]> {
    try {
      return await this.showtimeRepository.findAll();
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async findById(id: string): Promise<Showtime> {
    try {
      return await this.showtimeRepository.findById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public async updateById(
    id: string,
    data: Partial<Showtime>,
  ): Promise<Showtime> {
    const showtime = await this.findById(id);
    return this.showtimeRepository.updateById(showtime.id, data);
  }
}

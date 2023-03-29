import { BaseEntity } from '../commons/base/BaseEntity';

export class Booking extends BaseEntity {
  readonly userId: string;
  readonly showtimeId: string;
  readonly movies: string[];
}

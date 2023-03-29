import { BaseEntity } from '../commons/base/BaseEntity';

export class Showtime extends BaseEntity {
  readonly date: Date;
  readonly movies: string[];
}

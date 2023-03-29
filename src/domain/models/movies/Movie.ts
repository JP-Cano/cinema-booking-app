import { BaseEntity } from '../commons/base/BaseEntity';

export class Movie extends BaseEntity {
  readonly title: string;
  readonly director: string;
  readonly rating: number;
}

import { BaseEntity } from '../commons/base/BaseEntity';

export class User extends BaseEntity {
  readonly name: string;
  readonly lastName: string;
}

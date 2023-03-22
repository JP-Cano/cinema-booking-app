import { BaseEntity } from '../commons/base/BaseEntity';

export class User extends BaseEntity {
  private readonly _name: string;
  private readonly _lastName: string;

  constructor(id: string, name: string, lastName: string) {
    super();
    this.id = id;
    this._name = name;
    this._lastName = lastName;
  }

  public get name(): string {
    return this._name;
  }

  public get lastName(): string {
    return this._lastName;
  }
}

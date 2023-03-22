import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntityData } from '../base/BaseEntityData';

@Schema()
export class UserData extends BaseEntityData {
  @Prop({ type: String, required: true, trim: true })
  private readonly _name: string;

  @Prop({ type: String, required: true, trim: true })
  private readonly _lastName: string;

  constructor(name: string, lastName: string) {
    super();
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

export const UserSchema = SchemaFactory.createForClass(UserData);
export type UserDocument = UserData & Document;

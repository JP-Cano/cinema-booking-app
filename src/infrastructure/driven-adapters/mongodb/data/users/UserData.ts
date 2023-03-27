import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity } from 'src/domain/models/commons/base/BaseEntity';

@Schema()
export class UserData extends BaseEntity {
  @Prop({ type: String, required: true, trim: true })
  readonly name: string;

  @Prop({ type: String, required: true, trim: true })
  readonly lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(UserData);
export type UserDocument = HydratedDocument<UserData>;

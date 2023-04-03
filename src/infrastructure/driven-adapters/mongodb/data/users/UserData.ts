import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class UserData {
  @Prop({ type: String, required: true, trim: true })
  readonly name: string;

  @Prop({ type: String, required: true, trim: true })
  readonly lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(UserData);
export type UserDocument = HydratedDocument<UserData>;

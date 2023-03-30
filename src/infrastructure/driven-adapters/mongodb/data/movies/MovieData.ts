import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BaseEntity } from '../../../../../domain/models/commons/base/BaseEntity';

@Schema()
export class MovieData extends BaseEntity {
  @Prop({ type: String, required: true, trim: true })
  readonly title: string;

  @Prop({ type: String, required: true, trim: true })
  readonly director: string;

  @Prop({ type: Number, required: true, trim: true })
  readonly rating: number;
}

export const MovieSchema = SchemaFactory.createForClass(MovieData);
export type MovieDocument = HydratedDocument<MovieData>;

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class MovieData {
  @Prop({ type: String, required: true, trim: true })
  readonly title: string;

  @Prop({ type: String, required: true, trim: true })
  readonly director: string;

  @Prop({ type: Number, required: true, trim: true })
  readonly rating: number;
}

export const MovieSchema = SchemaFactory.createForClass(MovieData);
export type MovieDocument = HydratedDocument<MovieData>;

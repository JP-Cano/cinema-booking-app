import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { MovieData } from '../movies/MovieData';

@Schema()
export class ShowtimeData {
  @Prop({ type: Date })
  readonly date: Date;

  @Prop({ type: Types.ObjectId, ref: 'movie', required: true })
  readonly movies: MovieData[];
}

export const ShowtimeSchema = SchemaFactory.createForClass(ShowtimeData);
export type ShowtimeDocument = HydratedDocument<ShowtimeData>;

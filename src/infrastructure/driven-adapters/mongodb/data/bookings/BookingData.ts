import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { MovieData } from '../movies/MovieData';

@Schema()
export class BookingData {
  @Prop({ type: Types.ObjectId, required: true, ref: 'user' })
  readonly userId: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'showtime' })
  readonly showtimeId: string;

  @Prop({ type: Types.ObjectId, required: true, ref: 'movie' })
  readonly movies: MovieData[];
}

export const BookingSchema = SchemaFactory.createForClass(BookingData);
export type BookingDocument = HydratedDocument<BookingData>;

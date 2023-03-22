import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export class BaseEntityData {
  @Prop({ type: mongoose.Types.ObjectId, required: true })
  protected id: string;
}

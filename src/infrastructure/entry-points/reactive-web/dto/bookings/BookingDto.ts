import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsMongoId, IsNotEmpty } from 'class-validator';

export class BookingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly userId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsMongoId()
  readonly showtimeId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  readonly movies: string[];
}

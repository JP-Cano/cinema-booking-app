import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString, IsNotEmpty } from 'class-validator';

export class ShowtimeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  readonly date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  readonly movies: string[];
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Max, MaxLength, Min, MinLength } from 'class-validator';

export class MovieDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  readonly title: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  readonly director: string;

  @ApiProperty()
  @IsNotEmpty()
  @Min(0)
  @Max(5)
  readonly rating: number;
}

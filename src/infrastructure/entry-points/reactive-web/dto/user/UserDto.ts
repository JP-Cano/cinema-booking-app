import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  readonly lastName: string;
}

import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(7)
  readonly username: string;
  @IsString()
  readonly password: string;
}

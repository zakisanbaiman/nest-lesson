import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  async validateUser({ username, password }: CreateUserDto) {
    return this.authService.validateUser(username, password);
  }

  @Post('login')
  async login(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    if (await this.validateUser(createUserDto)) {
      return this.authService.login(createUserDto);
    }

    return this.authService.login(createUserDto);
  }
}

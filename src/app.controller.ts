import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // @Get()
  // getHello(): string {
  //   // return 'Hello World!';
  //   return this.appService.getHello();
  // }

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

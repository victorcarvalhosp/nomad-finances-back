import { UsersService } from './users/users.service';
import { Public } from './auth/isPublic.decorator';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UsersService,
  ) {}

  @Get('profile')
  getProfile(@Request() req) {
    console.log('ENV');
    console.log(process.env.NODE_ENV);

    console.log(process.env.TEST);
    return req.user;
  }

  @Public()
  @Post()
  async save(@Request() req) {
    return await this.userService.save(req.body);
  }

  @Public()
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}

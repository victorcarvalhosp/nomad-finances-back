import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from './isPublic.decorator';
import { Controller, UseGuards, Request, Post } from '@nestjs/common';

@Controller('auth')
export class AuthControllerController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log(req.user);
    return this.authService.login(req.user);
  }
}

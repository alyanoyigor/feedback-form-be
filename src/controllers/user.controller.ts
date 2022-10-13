import { Request, Response } from 'express';
import { Controller, Post, Req, Res } from '@nestjs/common';

import { UserService } from '@services/user.service';
import { HttpService } from '@services/http.service';

@Controller('user-feedback')
export class UserController {
  constructor(
    private userService: UserService,
    private httpService: HttpService,
  ) {}

  @Post()
  async createUser(@Req() request: Request, @Res() response: Response) {
    try {
      await this.userService.createUser(request.body);

      return this.httpService.formatSuccessResponse(response, {
        message: 'Feedback successfully upload',
      });
    } catch (error) {
      return this.httpService.formatErrorResponse(response, error);
    }
  }
}

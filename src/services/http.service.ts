import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class HttpService {
  private formatResponse<T>(error: boolean, data: T) {
    return { error, data };
  }

  formatSuccessResponse<T>(@Res() response: Response, data: T) {
    return response
      .status(HttpStatus.OK)
      .json(this.formatResponse(false, data));
  }

  formatErrorResponse<T>(@Res() response: Response, error: T) {
    return response
      .status(HttpStatus.BAD_REQUEST)
      .json(this.formatResponse(true, error));
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(
    responseObject: any,   
    httpStatus: HttpStatus,
  ) {
    super(
      {
        responseObjectData: responseObject,
      },
      httpStatus,
    );
  }
}

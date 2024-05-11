// picture.controller.ts

import { Controller, Post, UploadedFile, UseInterceptors, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PictureService } from './picture.service';
import { Express } from 'express';

@Controller('pictures')
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadPicture(@UploadedFile() image: Express.Multer.File) {
    if (!image) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'No image file provided',
      };
    }
    return this.pictureService.uploadPicture(image);
  }
}
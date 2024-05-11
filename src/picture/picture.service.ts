// picture.service.ts

import { Injectable } from '@nestjs/common';
import { Picture } from './entities/picture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture)
    private readonly pictureRepository: Repository<Picture>,
  ) {}

  async uploadPicture(image: Express.Multer.File) {
    const picture = new Picture();
    picture.fileName = image.originalname;
    picture.filePath = image.path;

    return this.pictureRepository.save(picture);
  }
}

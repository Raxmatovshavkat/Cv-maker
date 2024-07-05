import { Injectable } from '@nestjs/common';
import { CreateSocialMediaDto } from './dto/create-social_media.dto';
import { UpdateSocialMediaDto } from './dto/update-social_media.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { socialMedia } from './entities/social_media.entity';

@Injectable()
export class SocialMediaService {
  constructor(@InjectModel('social_media') private readonly socialMediaService:Model<socialMedia>){}
  async create(createsocialMediaDto: CreateSocialMediaDto) {
    return await new this.socialMediaService(createsocialMediaDto).save();
  }

  async findAll() {
    return await this.socialMediaService.find();
  }

  async findOne(id: string) {
    return await this.socialMediaService.findById(id);
  }

  async update(id: string, updatesocialMediaDto: UpdateSocialMediaDto) {
    return await this.socialMediaService.findByIdAndUpdate(id, updatesocialMediaDto);
  }

  async remove(id: string) {
    return await this.socialMediaService.findByIdAndUpdate(id);
  }
}

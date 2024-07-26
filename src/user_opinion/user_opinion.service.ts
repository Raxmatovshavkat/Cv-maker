import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserOpinionDto } from './dto/create-user_opinion.dto';
import { UpdateUserOpinionDto } from './dto/update-user_opinion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserOpinion } from './entities/user_opinion.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserOpinionService {
  constructor(@InjectModel(UserOpinion.name) private readonly userOpinionService:Model<UserOpinion>){}
  async create(createUserOpinionDto: CreateUserOpinionDto) {
    return await new this.userOpinionService(createUserOpinionDto).save();
  }

  async findAll() {
    const opinion=await this.userOpinionService.find()
    if(!opinion){
      throw new NotFoundException()
    }
    return opinion
  }

  async findAllActive(): Promise<UserOpinion[]> {
    const opinions = await this.userOpinionService.find({ is_active: true }).exec();
    if (!opinions || opinions.length === 0) {
      throw new NotFoundException('No active opinions found');
    }
    return opinions;
  }
  async findOne(id: string) {
    const opinion=await this.userOpinionService.findById(id)
    if(!opinion){
      throw new NotFoundException()
    }
    return opinion
  }

  async update(id: string, updateUserOpinionDto: UpdateUserOpinionDto) {
    const opinion=await this.userOpinionService.findById(id);
    if (!opinion) {
      throw new NotFoundException()
    }
    opinion.updateOne(updateUserOpinionDto)
    return `Updated sucessfully`
  }

  async remove(id: string) {
    const opinion=await this.userOpinionService.findById(id)
    if (!opinion) {
      throw new NotFoundException()
    }
    opinion.deleteOne()
    return `Deleted`

  }
}

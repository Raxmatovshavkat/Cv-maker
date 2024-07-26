import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserMessageDto } from './dto/create-user_message.dto';
import { UpdateUserMessageDto } from './dto/update-user_message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserMessage } from './entities/user_message.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserMessageService {
  constructor(@InjectModel(UserMessage.name) private readonly userMessageService: Model<UserMessage>) { }
  async create(createUserMessageDto: CreateUserMessageDto) {
    const message = await new this.userMessageService(createUserMessageDto).save()
    return message
  }

  async findAll() {
    try {
      const message = await this.userMessageService.find()
      if (!message) {
        throw new NotFoundException()
      }
      return message
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }


  async findOne(id: string) {
    try {
      const message = await this.userMessageService.findById(id)
      if (!message) {
        throw new UnauthorizedException()
      }
      return message
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async update(id: string, updateUserMessageDto: UpdateUserMessageDto) {
    try {
      const message = await this.userMessageService.findById(id)
      if (!message) {
        throw new UnauthorizedException()
      }
      message.updateOne(updateUserMessageDto)
      return `message updated with id ${id}`
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

  async remove(id: string) {
    try {
      const message = await this.userMessageService.findByIdAndDelete(id)
      if (!message) {
        throw new UnauthorizedException()
      }
      return `Sucessful deleted`
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }
}

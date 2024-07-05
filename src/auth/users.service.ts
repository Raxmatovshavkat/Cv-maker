import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/register-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.model';
import { Model } from 'mongoose';
import { CreateLoginDto } from './dto/login-user.dto ';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private readonly userModel: Model<User>) { }

  async register(createUserDto: CreateRegisterDto) {
    return await new this.userModel(createUserDto).save()
  }


  async login(createUserDto: CreateLoginDto) {
    return await new this.userModel(createUserDto).save()
  }

  async me(id: string) {
    return await this.userModel.findById(id);
  }

  async logout(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}

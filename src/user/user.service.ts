import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/register-user.dto';
import { CreateLoginDto } from './dto/login-user.dto ';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private readonly userModel: Model<User>) { }

  async register(createUserDto: CreateRegisterDto) {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await new this.userModel({
      ...rest,
      password: hashedPassword,
    });
    return user.save();
  }

  async signIn(createLoginDto: CreateLoginDto) {
    const { email, password } = createLoginDto;
    const user = await this.userModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async find() {
    const user = await this.userModel.find().exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  async findById(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByIdAndDelete(id: string) {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}

import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/register-user.dto';
import { CreateLoginDto } from './dto/login-user.dto ';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/user.model';
import * as otpGenerator from 'otp-generator';
import { EmailService } from 'src/mail/mail.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly emailService: EmailService,
  ) { }

  async register(createUserDto: CreateRegisterDto): Promise<UserDocument> {
    const { password, email, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });

    const user = new this.userModel({
      ...rest,
      email,
      password: hashedPassword,
      otp,
    });

    try {
      await this.emailService.sendEmail(email, otp);
      const savedUser = await user.save();
      return savedUser;
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Failed to register user');
    }
  }

  async signIn(createLoginDto: CreateLoginDto): Promise<UserDocument> {
    const { email, password } = createLoginDto;
    const user = await this.userModel.findOne({ email }).exec();

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async find(): Promise<UserDocument[]> {
    const users = await this.userModel.find().exec();
    if (!users) {
      throw new NotFoundException('Users not found');
    }
    return users;
  }

  async findById(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByIdAndDelete(id: string): Promise<UserDocument> {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}

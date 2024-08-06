import { Injectable, NotFoundException, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/register-user.dto';
import { CreateLoginDto } from './dto/login-user.dto ';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/user.model';
import * as otpGenerator from 'otp-generator';
import { EmailService } from 'src/mail/mail.service';
import { OtpService } from 'src/otp/otp.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) 
    private readonly userModel: Model<UserDocument>,
    private readonly emailService: EmailService,
    private readonly otpService:OtpService
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
      const savedUser = await user.save()
      await this.otpService.saveOtp({ email, otp })
      return savedUser;
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Failed to register user');
    }
  }

  async signIn(createLoginDto: CreateLoginDto): Promise<UserDocument> {
    try {
      const { email, password } = createLoginDto;
      const user = await this.userModel.findOne({ email }).exec();

      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new UnauthorizedException('Invalid credentials');
      }

      return user;
    } catch (error) {
      console.error('Registration error:', error.message);
      throw new Error('Failed to login user');
    }
  }

  async find(): Promise<UserDocument[]> {
    try {
      const users = await this.userModel.find().exec();
      if (!users) {
        throw new NotFoundException('Users not found');
      }
      return users;
    } catch (error) {
      console.error('Registration error:', error.message);
      throw new Error('Failed to find user');
    }
  }

  async findById(id: string): Promise<UserDocument> {
    try {
      const user = await this.userModel.findById(id).exec();
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (error) {
      console.error('Registration error:', error.message);
      throw new InternalServerErrorException()
    }
  }

  async findByIdAndDelete(id: string): Promise<UserDocument> {
    try {
      const user = await this.userModel.findByIdAndDelete(id).exec();
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;

    } catch (error) {
      console.error('Registration error:', error.message);
      throw new Error('Failed to find user');
    }
  }

  async updateStatus(userId: string, status: string): Promise<UserDocument> {
    try {
      const user = await this.userModel.findByIdAndUpdate(userId, { is_active: status === 'active' }, { new: true }).exec();
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (error) {
      console.error('Update status error:', error);
      throw new InternalServerErrorException('Failed to update user status');
    }
  }
}

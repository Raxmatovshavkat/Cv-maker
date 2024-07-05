import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/register-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.model';
import { Model } from 'mongoose';
import { CreateLoginDto } from './dto/login-user.dto ';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('users')
  private readonly userModel: Model<User>,
    private jwtService: JwtService) { }

  async register(createUserDto: CreateRegisterDto) {
    return await new this.userModel(createUserDto).save()
  }

  async signIn(createLoginDto: CreateLoginDto): Promise<{ access_token: string }> {
    const { email, password } = createLoginDto;
    const user = await this.userModel.findOne({ email });
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async me(id: string) {
    return await this.userModel.findById(id);
  }

  async logout(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}

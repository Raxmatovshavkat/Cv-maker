import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/register-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.model';
import { Model } from 'mongoose';
import { CreateLoginDto } from './dto/login-user.dto ';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectModel('users')
  private readonly userModel: Model<User>,
    private jwtService: JwtService) { }
 
  async register(createUserDto: CreateRegisterDto) {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.userModel.create({
      ...rest,
      password: hashedPassword,
    });
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
    const user=this.userModel.findById(id)
    if(!user){
      throw new NotFoundException()
    }
    
    return {
      user:await this.userModel.findByIdAndDelete(id)
    }
  }
}


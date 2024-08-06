import { Injectable, NotFoundException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateRegisterDto } from '../user/dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateLoginDto } from '../user/dto/login-user.dto ';
import * as dotenv from 'dotenv';
import { RefreshTokenService } from 'src/refresh-token/refresh-token.service';
import { UserDocument } from '../user/models/user.model';
import { OtpService } from 'src/otp/otp.service';
dotenv.config();

@Injectable()
export class AuthService {
  constructor(
    private readonly authService: UserService,
    private readonly jwtService: JwtService,
    private readonly refreshService: RefreshTokenService,
    private readonly otpService:OtpService
  ) { }

  async register(createUserDto: CreateRegisterDto): Promise<UserDocument> {
   try {
     const user= this.authService.register(createUserDto);
     if (!user){
       throw new NotFoundException()
     }
     return user
   } catch (error) {
    console.log(`User not create ${error.message}`);
    throw new InternalServerErrorException()
   }
  }

  async signIn(createLoginDto: CreateLoginDto): Promise<{ access_token: string; refresh_token: string }> {
    try {
      const user: UserDocument = await this.authService.signIn(createLoginDto);
  
      const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
      const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
  
      if (!accessTokenSecret || !refreshTokenSecret) {
        throw new Error('JWT secret not configured');
      }
  
      const payload = { sub: user._id.toString(), email: user.email };
      const accessToken = this.jwtService.sign(payload, { secret: accessTokenSecret, expiresIn: '5m' });
      const refreshToken = this.jwtService.sign(payload, { secret: refreshTokenSecret, expiresIn: '7d' });
  
      await this.refreshService.storeRefreshToken(refreshToken, user._id.toString());
  
      return {
        access_token: accessToken,
        refresh_token: refreshToken,
      };
    } catch (error) {
      console.log(`You have this error ${error.message}`);
      throw new UnauthorizedException()
    }
  }

  async refreshAccessToken(refreshToken: string): Promise<{ access_token: string }> {
    try {
      return this.refreshService.refreshAccessToken(refreshToken);
    } catch (error) {
      console.log(`You have this error ${error.message}`);
      throw new UnauthorizedException()
    }
  }

  async all(): Promise<UserDocument[]> {
    try {
      return await this.authService.find();
    } catch (error) {
      console.log(`You have this error ${error.message}`);
      throw new UnauthorizedException()
    }
  }

  async me(id: string): Promise<UserDocument> {
    try {
      return this.authService.findById(id);
    } catch (error) {
      console.log(`You have this error ${error.message}`);
      throw new UnauthorizedException()
    }
  }

  async logout(userId: string): Promise<UserDocument> {
    await this.refreshService.removeTokensForUser(userId);
    return this.authService.findByIdAndDelete(userId);
  }

  async verify(userId: string, otp: string): Promise<void> {
    try {
      await this.otpService.verifyOtp(userId, otp);
      await this.authService.updateStatus(userId, 'active');
    } catch (error) {
      console.log(`Verify OTP error: ${error.message}`);
      throw new UnauthorizedException();
    }
  }
}

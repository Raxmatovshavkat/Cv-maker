// refresh-token.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { RefreshTokenModule } from './refresh-token.module';

@Injectable()
export class RefreshTokenService {
  constructor(
    @InjectModel('token') private readonly refreshTokenModel: Model<RefreshTokenModule>,
    private readonly jwtService: JwtService,
  ) { }

  async storeRefreshToken(token: string, userId: string) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);

    const refreshToken = new this.refreshTokenModel({
      token,
      userId,
      expiryDate,
    });
    return refreshToken.save();
  }

  async refreshAccessToken(refreshToken: string): Promise<{ access_token: string }> {
    const tokenData = await this.refreshTokenModel.findOne({ token: refreshToken }).exec();
    if (!tokenData) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const payload = this.jwtService.verify(refreshToken, { secret: process.env.REFRESH_TOKEN_SECRET });
    const newAccessToken = this.jwtService.sign({ sub: payload.sub, email: payload.email }, { secret: process.env.ACCESS_TOKEN_SECRET, expiresIn: '5m' });

    return {
      access_token: newAccessToken,
    };
  }

  async removeTokensForUser(userId: string): Promise<{ acknowledged: boolean; deletedCount: number }> {
    return this.refreshTokenModel.deleteMany({ userId }).exec();
  }
}

import { Injectable, UseGuards } from '@nestjs/common';
import { CreateRegisterDto } from '../user/dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateLoginDto } from '../user/dto/login-user.dto ';
import * as dotenv from "dotenv"
import { RefreshTokenService } from 'src/refresh-token/refresh-token.service';
dotenv.config()

@Injectable()
export class AuthService {
  constructor(
    private readonly authService: UserService,
    private readonly jwtService: JwtService,
    private readonly refreshService: RefreshTokenService
  ) { }

  async register(createUserDto: CreateRegisterDto) {
    return this.authService.register(createUserDto);
  }

  async signIn(createLoginDto: CreateLoginDto): Promise<{ access_token: string, refresh_token: string }> {
    const user = await this.authService.signIn(createLoginDto);

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

  }
  async refreshAccessToken(refreshToken: string): Promise<{ access_token: string }> {
    return this.refreshService.refreshAccessToken(refreshToken);
  }
  async all() {

    return this.authService.find();
  }
  async me(id: string) {
    return this.authService.findById(id);
  }

  async logout(userId: string) {
    await this.refreshService.removeTokensForUser(userId);
    return this.authService.findByIdAndDelete(userId);
  }
}

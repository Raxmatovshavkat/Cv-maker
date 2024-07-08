import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenService } from './refresh-token.service';
import {  RefreshTokenSchema } from './entities/refresh-token.entity';
import * as dotenv from 'dotenv';
dotenv.config()
console.log(process.env.accesTokenKey);

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'token', schema: RefreshTokenSchema }]),
    JwtModule.register({
      global: true,
    }),
  ],
  providers: [RefreshTokenService],
  exports: [RefreshTokenService],
})
export class RefreshTokenModule { }

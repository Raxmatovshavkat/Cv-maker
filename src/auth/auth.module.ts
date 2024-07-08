import { Module, ValidationPipe } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { APP_PIPE } from '@nestjs/core';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { RefreshTokenModule } from 'src/refresh-token/refresh-token.module';

@Module({
  imports: [
    UserModule,
    RefreshTokenModule,
    JwtModule.register({
      global: true
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    },
  ],
})
export class AuthModule { }

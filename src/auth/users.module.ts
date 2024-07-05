import { Module, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { APP_PIPE } from '@nestjs/core';
const jwtConstants = "shavkatboy"
console.log(jwtConstants);

@Module({
  imports:[MongooseModule.forFeature([{name:"users",schema:UserSchema}]),
    JwtModule.register({
      global: true,
      secret: jwtConstants,
      signOptions: { expiresIn: '5m' },
    }),],
  controllers: [UsersController],
  providers: [UsersService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true
      })
    }
  ],
})
export class UsersModule {}

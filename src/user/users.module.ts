import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[MongooseModule.forFeature([{name:"users",schema:UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

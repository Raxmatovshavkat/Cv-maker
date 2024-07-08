import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserSchema } from './models/user.model';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports:[MongooseModule.forFeature([{name : "Users", schema : UserSchema}])],
  controllers: [],
  providers: [UserService],
  exports: [MongooseModule ,UserService ]
})
export class UserModule {}

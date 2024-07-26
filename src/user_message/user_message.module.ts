import { Module } from '@nestjs/common';
import { UserMessageService } from './user_message.service';
import { UserMessageController } from './user_message.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMessage, UserMessageSchema } from './entities/user_message.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:UserMessage.name,schema:UserMessageSchema}])],
  controllers: [UserMessageController],
  providers: [UserMessageService],
})
export class UserMessageModule {}

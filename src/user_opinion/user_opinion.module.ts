import { Module } from '@nestjs/common';
import { UserOpinionService } from './user_opinion.service';
import { UserOpinionController } from './user_opinion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserOpinion, UserOpinionSchema } from './entities/user_opinion.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:UserOpinion.name,schema:UserOpinionSchema}])],
  controllers: [UserOpinionController],
  providers: [UserOpinionService],
})
export class UserOpinionModule {}

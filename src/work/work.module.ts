import { Module, ValidationPipe } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkSchema } from './entities/work.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports:[MongooseModule.forFeature([{name:'works',schema:WorkSchema}])],
  controllers: [WorkController],
  providers: [WorkService,{
    provide:APP_PIPE,
    useValue:new ValidationPipe({
      whitelist:true
    })
  }],
})
export class WorkModule {}

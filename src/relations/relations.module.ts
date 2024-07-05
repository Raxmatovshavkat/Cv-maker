import { Module, ValidationPipe } from '@nestjs/common';
import { RelationsService } from './relations.service';
import { RelationsController } from './relations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RelationSchema } from './entities/relation.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports:[MongooseModule.forFeature([{name:"relations",schema:RelationSchema}])],
  controllers: [RelationsController],
  providers: [RelationsService, {
    provide: APP_PIPE,
    useValue: new ValidationPipe({
      whitelist: true,
      transform: true
    })
  }],
})
export class RelationsModule {}

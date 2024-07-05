import { Module } from '@nestjs/common';
import { RelationsService } from './relations.service';
import { RelationsController } from './relations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RelationSchema } from './entities/relation.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"relations",schema:RelationSchema}])],
  controllers: [RelationsController],
  providers: [RelationsService],
})
export class RelationsModule {}

import { Module, ValidationPipe } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillSchema } from './entities/skill.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports:[MongooseModule.forFeature([{name:'skills',schema:SkillSchema}])],
  controllers: [SkillsController],
  providers: [SkillsService, {
    provide: APP_PIPE,
    useValue: new ValidationPipe({
      whitelist: true,
      transform:true
    })
  }],
})
export class SkillsModule {}

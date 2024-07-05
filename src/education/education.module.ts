import { Module, ValidationPipe } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EducationSchema } from './entities/education.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports:[MongooseModule.forFeature([{name:'educations',schema:EducationSchema}])],
  controllers: [EducationController],
  providers: [EducationService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true
      })
    }
  ],
})
export class EducationModule {}

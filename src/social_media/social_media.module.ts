import { Module, ValidationPipe } from '@nestjs/common';
import { SocialMediaService } from './social_media.service';
import { SocialMediaController } from './social_media.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { socialMediaSchema } from './entities/social_media.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports:[MongooseModule.forFeature([{name:"social_media",schema:socialMediaSchema}])],
  controllers: [SocialMediaController],
  providers: [SocialMediaService, {
    provide: APP_PIPE,
    useValue: new ValidationPipe({
      whitelist: true
    })
  }],
})
export class SocialMediaModule {}

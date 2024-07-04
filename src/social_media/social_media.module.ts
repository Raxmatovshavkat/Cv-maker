import { Module } from '@nestjs/common';
import { SocialMediaService } from './social_media.service';
import { SocialMediaController } from './social_media.controller';

@Module({
  controllers: [SocialMediaController],
  providers: [SocialMediaService],
})
export class SocialMediaModule {}

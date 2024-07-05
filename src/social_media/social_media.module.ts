import { Module } from '@nestjs/common';
import { SocialMediaService } from './social_media.service';
import { SocialMediaController } from './social_media.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { socialMediaSchema } from './entities/social_media.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"social_media",schema:socialMediaSchema}])],
  controllers: [SocialMediaController],
  providers: [SocialMediaService],
})
export class SocialMediaModule {}

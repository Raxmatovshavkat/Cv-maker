import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialMediaDto } from './create-social_media.dto';

export class UpdateSocialMediaDto extends PartialType(CreateSocialMediaDto) {}

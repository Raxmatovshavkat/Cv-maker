import { PartialType } from '@nestjs/mapped-types';
import { CreateUserMessageDto } from './create-user_message.dto';

export class UpdateUserMessageDto extends PartialType(CreateUserMessageDto) {}

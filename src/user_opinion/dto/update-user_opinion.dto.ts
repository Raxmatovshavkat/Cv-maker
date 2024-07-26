import { PartialType } from '@nestjs/mapped-types';
import { CreateUserOpinionDto } from './create-user_opinion.dto';

export class UpdateUserOpinionDto extends PartialType(CreateUserOpinionDto) {}

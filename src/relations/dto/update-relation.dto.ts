import { PartialType } from '@nestjs/mapped-types';
import { CreateRelationDto } from './create-relation.dto';

export class UpdateRelationDto extends PartialType(CreateRelationDto) {}

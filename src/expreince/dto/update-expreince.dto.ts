import { PartialType } from '@nestjs/mapped-types';
import { CreateExpreinceDto } from './create-expreince.dto';

export class UpdateExpreinceDto extends PartialType(CreateExpreinceDto) {}

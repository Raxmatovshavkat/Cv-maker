import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterDto } from './register-user.dto';

export class UpdateUserDto extends PartialType(CreateRegisterDto) { }

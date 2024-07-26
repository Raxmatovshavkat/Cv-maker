import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateFileDto {
    @IsNotEmpty()
    userId: string;

    @IsString()
    table_name: string;

    @IsBoolean()
    is_active:boolean
}

import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateEducationDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    position: string;
    @IsNumber()
    faculty: number;
    @IsString()
    description: string;
    @IsBoolean()
    is_active: boolean;
    @IsNumber()
    education_logo_id: number

}

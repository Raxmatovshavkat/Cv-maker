import { IsNotEmpty, IsString, IsNumberString, IsNumber, IsBoolean } from 'class-validator';

export class CreateEducationDto {
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsString()
    @IsNotEmpty()
    link:string;
    @IsString()
    @IsNotEmpty()
    position:string;
    @IsNotEmpty()
    @IsNumber()
    faculty:number;
    @IsString()
    @IsNotEmpty()
    description:string;
    @IsBoolean()
    @IsNotEmpty()
    isActive:boolean;
}

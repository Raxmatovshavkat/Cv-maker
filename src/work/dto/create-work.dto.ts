import {IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkDto {
    @IsNotEmpty()
    @IsString()
    description:string;
    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean;
}

import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, isNotEmpty, IsString } from "class-validator";

export class CreateSocialMediaDto {
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsArray()
    @ArrayMinSize(1, { message: 'relationId must contain at least 1 element' })
    link:Array<string>;
    @IsNotEmpty()
    @IsBoolean()
    isActive:boolean;
    @IsString()
    @IsNotEmpty()
    accountName:string;
}

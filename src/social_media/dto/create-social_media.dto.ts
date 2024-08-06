import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, isNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSocialMediaDto {
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsArray()
    @ArrayMinSize(1, { message: 'relationId must contain at least 1 element' })
    link:Array<string>;
    @IsNotEmpty()
    @IsBoolean()
    is_active:boolean;
    @IsString()
    @IsNotEmpty()
    accountName:string;

    @IsOptional()
    icon_image_id:number
}

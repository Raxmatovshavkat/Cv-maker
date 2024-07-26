import { IsNotEmpty, IsString } from "class-validator";

export class CreateRelationDto {
    @IsString()
    @IsNotEmpty()
    userId:string;
    @IsString()
    @IsNotEmpty()
    expreinceId:string;
    @IsString()
    @IsNotEmpty()
    socialId:string;
    @IsString()
    @IsNotEmpty()
    educationId:string;
    @IsString()
    @IsNotEmpty()
    skillId:string;
    @IsString()
    @IsNotEmpty()
    languageId: string;
}

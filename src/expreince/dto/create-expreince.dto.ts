import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateExpreinceDto {
    @IsString()
    @IsNotEmpty()
    company_name:string;
    @IsString()
    @IsNotEmpty()
    company_address:string;
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    position:string;
    @IsString()
    @IsNotEmpty()
    workId:string;
}

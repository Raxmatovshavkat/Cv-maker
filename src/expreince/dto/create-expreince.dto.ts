import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateExpreinceDto {
    @IsString()
    @IsNotEmpty()
    company_name:string;
    @IsString()
    @IsNotEmpty()
    company_address:string;
    @IsString()
    @IsOptional()
    position:string;
    @IsString()
    @IsOptional()
    description: string;
    @IsBoolean()
    @IsOptional()
    is_active: boolean;
}

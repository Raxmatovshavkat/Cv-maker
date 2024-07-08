import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRefreshTokenDto {
    @IsString()
    @IsOptional()
    userId:string;
    
    @IsString()
    @IsOptional()
    token:string
}

import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateLoginDto {
    @IsString()
    @IsNotEmpty()
    email: string;
   

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    password: string;
}


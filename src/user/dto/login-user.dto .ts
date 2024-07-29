import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateLoginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'test@gmail.com', description: 'The email of the user' })
    email: string;
   

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    @ApiProperty({ example: 'Qad133!23#', description: 'You are use big and lower alphabets and number and symbol overal min 8 character' })
    password: string;
}


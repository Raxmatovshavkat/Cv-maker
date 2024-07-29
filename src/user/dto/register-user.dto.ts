import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional,  IsString, IsStrongPassword } from "class-validator"


export class CreateRegisterDto {
    @IsOptional()
    _id: string;

    @IsString()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsOptional()
    address: string

    @IsString()
    city: string

    @IsString()
    postcode: string

    @IsString()
    phone: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({example:'test@gmail.com',description:'The email of the user'})
    email: string;
    

    @IsNotEmpty()
    @IsStrongPassword()
    @ApiProperty({example:'Qad133!23#',description:'You are use big and lower alphabets and number and symbol overal min 8 character'})
    password: string;

    @IsOptional()
    avatar_id:number

    @IsString()
    about_text:string
}


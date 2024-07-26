import { IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator"

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
    email: string;
    

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @IsOptional()
    avatar_id:number

    @IsString()
    about_text:string
}


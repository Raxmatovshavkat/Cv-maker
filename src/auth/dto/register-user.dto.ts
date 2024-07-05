import { IsNotEmpty, IsNumberString, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator"

export class CreateRegisterDto {
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
    @IsNotEmpty()
    city: string

    @IsString()
    @IsNotEmpty()
    postcode: string

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @IsString()
    @IsNotEmpty()
    email: string;
    

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    password: string;
}


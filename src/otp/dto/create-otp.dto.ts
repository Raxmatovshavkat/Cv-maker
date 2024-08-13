import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOtpDto {
    @IsNotEmpty()
    @IsString()
    userId: string;  // Assuming userId is being used for OTP association

    @IsNotEmpty()
    @IsString()
    otp: string;
}

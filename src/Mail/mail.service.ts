import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) { }

    async sendEmail(email: string, otp: string): Promise<void> {
        await this.mailerService.sendMail({
            to: email,
            from: 'rshavkat759@gmail.com', 
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`,
            html: `<b>Your OTP code is ${otp}</b>`,
        });
    }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserSchema, User } from './models/user.model';
import { MailModule } from '../Mail/mail.modue';
import { EmailService } from '../mail/mail.service';
import { OtpModule } from 'src/otp/otp.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), 
    MailModule,
    OtpModule
  ],
  providers: [UserService, EmailService],
  exports: [UserService],
})
export class UserModule { }

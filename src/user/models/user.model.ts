import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    address: string;

    @Prop()
    city: string;

    @Prop()
    postcode: string;

    @Prop()
    phone: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    password: string;

    @Prop()
    avatar_id:number;

    @Prop()
    about_text:string
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

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

    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Roles" }] })
    roleId: string

    @Prop()
    is_active:boolean
}

export const UserSchema = SchemaFactory.createForClass(User);

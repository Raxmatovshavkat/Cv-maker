import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

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

    @Prop()
    email: string;


    @Prop()
    password:string;
}

export const UserSchema = SchemaFactory.createForClass(User);

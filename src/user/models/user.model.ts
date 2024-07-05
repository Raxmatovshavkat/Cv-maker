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

    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "releations" }] })
    relationId:string;
}

export const UserSchema = SchemaFactory.createForClass(User);

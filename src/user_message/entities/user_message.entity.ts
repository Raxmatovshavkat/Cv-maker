import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";

export type UserMessageDocument=HydratedDocument<UserMessage>
@Schema()
export class UserMessage extends Model {
    @Prop()
    firstname: string

    @Prop()
    lastname: string

    @Prop()
    email: string

    @Prop()
    subject: string

    @Prop()
    message: string
}

export const UserMessageSchema = SchemaFactory.createForClass(UserMessage);

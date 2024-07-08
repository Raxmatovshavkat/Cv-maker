import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type RefreshTokenDocument = HydratedDocument<RefreshToken>;

@Schema()
export class RefreshToken {
    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }] })
    userId: string

    @Prop()
    token:string

    @Prop({required:true})
    expiryDate:Date
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);

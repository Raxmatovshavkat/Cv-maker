import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';

export type FileDocument = File & Document;

@Schema()
export class File {
    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }] })
    userId: string;

    @Prop()
    table_name: string;

    @Prop()
    is_active:boolean
}

export const FileSchema = SchemaFactory.createForClass(File);

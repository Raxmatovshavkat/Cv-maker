import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import  { HydratedDocument } from "mongoose";

export type socialMediaDocument = HydratedDocument<socialMedia>;

@Schema()
export class socialMedia {
    @Prop()
    title:string;

    @Prop()
    link:Array<string>;
    
    @Prop()
    isActive:boolean
    
    @Prop()
    accountName:string;
}

export const socialMediaSchema = SchemaFactory.createForClass(socialMedia);

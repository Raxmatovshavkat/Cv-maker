import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";

export type UserOpinionDocument=HydratedDocument<UserOpinion>

@Schema()

export class UserOpinion extends Model{

    @Prop()
    description:string
    
    @Prop()
    star:number

    @Prop()
    is_active:boolean
}

export const UserOpinionSchema = SchemaFactory.createForClass(UserOpinion);


import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import  { HydratedDocument } from "mongoose";

export type SkillDocument = HydratedDocument<Skill>;

@Schema()
export class Skill {
    @Prop()
    name:string;

    @Prop()
    type:string;

    @Prop()
    is_active:boolean;
   
}

export const SkillSchema = SchemaFactory.createForClass(Skill);

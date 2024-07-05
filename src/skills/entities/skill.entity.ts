import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import  { HydratedDocument } from "mongoose";

export type SkillDocument = HydratedDocument<Skill>;

@Schema()
export class Skill {
    @Prop()
    hardSkills: Array<string>;

    @Prop()
    softSkills:Array<string>;

    @Prop()
    language:Array<string>;
   
}

export const SkillSchema = SchemaFactory.createForClass(Skill);

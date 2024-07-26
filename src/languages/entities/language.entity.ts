import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type LanguageDocument = HydratedDocument<Language>;
export enum LanguageLevel {
    NATIVE = 'native',
    ELEMENTARY = 'elementary',
    PRE_INTERMEDIATE = 'pre_intermediate',
    INTERMEDIATE = 'intermediate',
    ADVANCED = 'advanced',
}
@Schema()
export class Language {
    @Prop()
    language: string;

    @Prop({type:String,enum:LanguageLevel,default:LanguageLevel.NATIVE})
    degree:string

    @Prop()
    is_active: boolean;

}

export const LanguageSchema = SchemaFactory.createForClass(Language);

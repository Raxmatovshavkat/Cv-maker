import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type EducationDocument = HydratedDocument<Education>;

@Schema()
export class Education {
    @Prop()
    title: string;

    @Prop()
    start_time: Date;

    @Prop()
    end_time: Date;

    @Prop()
    position: string;

    @Prop()
    faculty: number;

    @Prop()
    description: string;

    @Prop()
    is_active: boolean

    @Prop({type: Types.ObjectId, ref: () => File})
    education_logo_id: number
    
}

export const EducationSchema = SchemaFactory.createForClass(Education);

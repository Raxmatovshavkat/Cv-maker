import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EducationDocument = HydratedDocument<Education>;

@Schema()
export class Education {
    @Prop()
    title: string;

    @Prop()
    link: string;

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
    isActive:boolean
}

export const EducationSchema = SchemaFactory.createForClass(Education);

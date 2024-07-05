import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type WorkDocument = HydratedDocument<Work>;

@Schema()
export class Work {

    @Prop()
    description: string;

    @Prop()
    isActive: boolean

}

export const WorkSchema = SchemaFactory.createForClass(Work);

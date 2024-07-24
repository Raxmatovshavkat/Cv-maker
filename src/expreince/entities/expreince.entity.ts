import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ExpreinceDocument = HydratedDocument<Expreince>;

@Schema()
export class Expreince {
    @Prop()
    company_name: string;

    @Prop()
    company_address: string;

    @Prop()
    position: string;

    @Prop()
    start_time: Date;

    @Prop()
    end_time: Date;

    @Prop()
    description: string;

    @Prop({ default: false })
    is_active: boolean;
}

export const ExpreinceSchema = SchemaFactory.createForClass(Expreince);

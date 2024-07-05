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


    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Works" }] })
    workId: string
}

export const ExpreinceSchema = SchemaFactory.createForClass(Expreince);

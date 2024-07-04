import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type RelationDocument = HydratedDocument<Relation>;

@Schema()
export class Relation {
    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }] })
    userId: string

    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Experiences" }] })
    experienceId: string

    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Socials" }] })
    socialId: string

    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Educations" }] })
    educationId: string

    @Prop({ required: true, isRequired: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skills" }] })
    skillId: string
}

export const RelationSchema = SchemaFactory.createForClass(Relation);

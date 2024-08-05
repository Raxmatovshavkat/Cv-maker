import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";


@Schema()
export class Role extends Model{
    @Prop()
    name:string;

    @Prop()
    is_active:boolean;

}

export const RoleSchema = SchemaFactory.createForClass(Role);


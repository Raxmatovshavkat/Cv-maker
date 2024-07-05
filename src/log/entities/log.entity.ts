import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Log extends Document {
    @Prop({ required: true, trim: true })
    method: string;

    @Prop({ required: true, trim: true })
    url: string;

    @Prop({ required: true })
    statusCode: number;

    @Prop({ required: true })
    responseTime: number;

    @Prop({ type: Date, default: Date.now })
    timestamp: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);

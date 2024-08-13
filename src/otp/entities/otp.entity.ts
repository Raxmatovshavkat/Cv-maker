import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ collection: 'otps' })
export class Otp extends Document {
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
    userId: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, unique: true })
    otp: string;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);

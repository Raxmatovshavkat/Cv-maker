import { Document } from 'mongoose';

export interface Log extends Document {
    readonly method: string;
    readonly url: string;
    readonly statusCode: number;
    readonly responseTime: number;
    readonly timestamp: Date;
}

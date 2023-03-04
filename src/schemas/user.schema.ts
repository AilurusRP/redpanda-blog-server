import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CatDocument = User & Document;

@Schema()
export class User extends Document {
    @Prop()
    authKeyHash: string;
}

export const CatSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AdminUserDataDocument = AdminUserData & Document;

@Schema()
export class AdminUserData extends Document {
    @Prop()
    uname: string;

    @Prop()
    authKeyHash: string;
}

export const AdminUserDataSchema = SchemaFactory.createForClass(AdminUserData);

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BlogDataDocument = BlogData & Document;

@Schema()
export class BlogData extends Document {
    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    createTime: Date;

    @Prop()
    updateTime: Date;

    @Prop([String])
    tags: string[];
}

export const BlogDataSchema = SchemaFactory.createForClass(BlogData);

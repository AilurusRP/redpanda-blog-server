import { Module } from "@nestjs/common";
import { CreateBlogService } from "./create-blog.service";
import { CreateBlogController } from "./create-blog.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { BlogDataSchema } from "src/schemas/blog.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: "blogs", schema: BlogDataSchema }])],
    providers: [CreateBlogService],
    controllers: [CreateBlogController],
})
export class CreateBlogModule {}

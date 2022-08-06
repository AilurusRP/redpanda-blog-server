import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BlogDataSchema } from "src/schemas/blog.schema";
import { UpdateBlogByIdController } from "./update-blog-by-id.controller";
import { UpdateBlogByIdService } from "./update-blog-by-id.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: "blogs", schema: BlogDataSchema }])],
    controllers: [UpdateBlogByIdController],
    providers: [UpdateBlogByIdService],
})
export class UpdateBlogByIdModule {}

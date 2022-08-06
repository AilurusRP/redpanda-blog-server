import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BlogDataSchema } from "src/schemas/blog.schema";
import { DeleteBlogByIdController } from "./delete-blog-by-id.controller";
import { DeleteBlogByIdService } from "./delete-blog-by-id.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: "blogs", schema: BlogDataSchema }])],
    controllers: [DeleteBlogByIdController],
    providers: [DeleteBlogByIdService],
})
export class DeleteBlogByIdModule {}

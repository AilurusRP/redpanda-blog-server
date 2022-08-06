import { Module } from "@nestjs/common";
import { GetAllBlogsService } from "./get-all-blogs.service";
import { GetAllBlogsController } from "./get-all-blogs.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { BlogDataSchema } from "src/schemas/blog.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: "blogs", schema: BlogDataSchema }])],
    providers: [GetAllBlogsService],
    controllers: [GetAllBlogsController],
})
export class GetAllBlogsModule {}

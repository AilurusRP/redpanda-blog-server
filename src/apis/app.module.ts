import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CreateBlogModule } from "./create-blog/create-blog.module";
import { GetAllBlogsModule } from "./get-all-blogs/get-all-blogs.module";
import { UpdateBlogByIdModule } from "./update-blog-by-id/update-blog-by-id.module";
import { DeleteBlogByIdModule } from "./delete-blog-by-id/delete-blog-by-id.module";
import config from "src/privConfig";

@Module({
    imports: [
        MongooseModule.forRoot(config.dbAddr),
        CreateBlogModule,
        GetAllBlogsModule,
        UpdateBlogByIdModule,
        DeleteBlogByIdModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

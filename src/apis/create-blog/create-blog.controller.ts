import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { createResponseData } from "src/response/response";
import { CreateBlogService } from "./create-blog.service";
import { CreateBlogData } from "./interfaces/create-blog-data.interface";

@Controller("create-blog")
export class CreateBlogController {
    constructor(private createBlogService: CreateBlogService) {}

    @Post()
    async createBlog(@Body() createBlogData: CreateBlogData, @Res() res: Response) {
        res.send(createResponseData(res, await this.createBlogService.createBlog(createBlogData)));
    }
}

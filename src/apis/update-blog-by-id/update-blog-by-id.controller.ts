import { Body, Controller, Post, Res, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { createResponseData } from "src/response/response";
import { UpdateBlogData } from "./interfaces/update-blog-data.interface";
import { UpdateBlogByIdService } from "./update-blog-by-id.service";

@Controller("update-blog-by-id")
export class UpdateBlogByIdController {
    constructor(private updateBlogByIdService: UpdateBlogByIdService) {}

    @Post()
    @UseInterceptors(FileInterceptor(''))
    async updateBlog(@Body() updateBlogData: UpdateBlogData, @Res() res: Response) {
        res.send(createResponseData(res, await this.updateBlogByIdService.updateBlog(updateBlogData)));
    }
}

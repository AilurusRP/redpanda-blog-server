import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { createResponseData } from "src/response/response";
import { DeleteBlogByIdService } from "./delete-blog-by-id.service";
import { DeleteBlogByIdData } from "./interfaces/delete-blog-by-id-data.interface";

@Controller("delete-blog-by-id")
export class DeleteBlogByIdController {
    constructor(private deleteBlogByIdService: DeleteBlogByIdService) {}

    @Post()
    async deleteBlog(@Body() data: DeleteBlogByIdData, @Res() res: Response) {
        res.send(createResponseData(res, await this.deleteBlogByIdService.deleteBlog(data)));
    }
}

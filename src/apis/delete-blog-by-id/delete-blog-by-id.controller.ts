import { Body, Controller, Post, Res, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { createResponseData } from "src/response/response";
import { DeleteBlogByIdService } from "./delete-blog-by-id.service";
import { DeleteBlogByIdData } from "./interfaces/delete-blog-by-id-data.interface";

@Controller("delete-blog-by-id")
export class DeleteBlogByIdController {
    constructor(private deleteBlogByIdService: DeleteBlogByIdService) {}

    @Post()
    @UseInterceptors(FileInterceptor(''))
    async deleteBlog(@Body() data: DeleteBlogByIdData, @Res() res: Response) {
        res.send(createResponseData(res, await this.deleteBlogByIdService.deleteBlog(data)));
    }
}

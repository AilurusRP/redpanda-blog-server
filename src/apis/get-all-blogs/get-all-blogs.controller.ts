import { Controller, Get } from "@nestjs/common";
import { GetAllBlogsService } from "./get-all-blogs.service";

@Controller("get-all-blogs")
export class GetAllBlogsController {
    constructor(private getAllBlogsService: GetAllBlogsService) {}

    @Get()
    async getAllBlogs() {
        return await this.getAllBlogsService.getAllBlogs();
    }
}

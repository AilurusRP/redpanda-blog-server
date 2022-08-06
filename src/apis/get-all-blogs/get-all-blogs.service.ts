import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BlogDataDocument } from "src/schemas/blog.schema";

@Injectable()
export class GetAllBlogsService {
    constructor(@InjectModel("blogs") private blogDataModel: Model<BlogDataDocument>) {}

    async getAllBlogs() {
        return await this.blogDataModel.find();
    }
}

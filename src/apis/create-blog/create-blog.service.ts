import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BlogDataDocument } from "src/schemas/blog.schema";
import { CreateBlogData } from "./interfaces/create-blog-data.interface";
import { isKeyValid } from "src/utils/key";
import { ResultTypes } from "src/response/result-types";
import { hasEmptyData } from "src/utils/has-empty-data";

@Injectable()
export class CreateBlogService {
    constructor(@InjectModel("blogs") private blogDataModel: Model<BlogDataDocument>) {}

    async createBlog(createBlogData: CreateBlogData): Promise<ResultTypes> {
        const { key, title, content, createTime, tags } = createBlogData;
        if (!isKeyValid(key)) return ResultTypes.noValidKey;
        if (hasEmptyData({ title, content, createTime, tags })) return ResultTypes.missingParams;
        try {
            const result = await this.blogDataModel.create({ title, content, createTime, tags });
            if (result._id) return ResultTypes.success;
        } catch (err) {
            if (err.name === "ValidationError") return ResultTypes.invalidDateFormat;
            return ResultTypes.unknownError;
        }
    }
}

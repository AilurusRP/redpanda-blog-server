import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ResultTypes } from "src/response/result-types";
import { BlogDataDocument } from "src/schemas/blog.schema";
import { hasEmptyData } from "src/utils/has-empty-data";
import { isKeyValid } from "src/utils/key";
import { UpdateBlogData } from "./interfaces/update-blog-data.interface";

@Injectable()
export class UpdateBlogByIdService {
    constructor(@InjectModel("blogs") private blogDataModel: Model<BlogDataDocument>) {}

    async updateBlog(updateBlogData: UpdateBlogData) {
        const { key, id, title, content, updateTime, tags } = updateBlogData;
        if (!isKeyValid(key)) return ResultTypes.noValidKey;
        if (hasEmptyData({ title, content, updateTime, tags })) return ResultTypes.missingParams;
        try {
            const result = await this.blogDataModel.findByIdAndUpdate(id, { title, content, updateTime, tags }).exec();
            if (result._id) return ResultTypes.success;
        } catch (err) {
            if (err.kind === "ObjectId") return ResultTypes.invalidId;
            if (err.kind === "date") return ResultTypes.invalidDateFormat;
            return ResultTypes.unknownError;
        }
    }
}

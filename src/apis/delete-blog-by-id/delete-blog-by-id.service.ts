import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { keys } from "lodash";
import { Model } from "mongoose";
import { ResultTypes } from "src/response/result-types";
import { BlogDataDocument } from "src/schemas/blog.schema";
import { isKeyValid } from "src/utils/key";
import { DeleteBlogByIdData } from "./interfaces/delete-blog-by-id-data.interface";

@Injectable()
export class DeleteBlogByIdService {
    constructor(@InjectModel("blogs") private blogDataModel: Model<BlogDataDocument>) {}

    async deleteBlog(data: DeleteBlogByIdData) {
        if (!isKeyValid(data.key)) return ResultTypes.noValidKey;
        try {
            const result = await this.blogDataModel.findByIdAndDelete(data.id).exec();
            if (result._id) return ResultTypes.success;
        } catch (err) {
            if (err.name === "CastError") return ResultTypes.invalidId;
            return ResultTypes.unknownError;
        }
    }
}

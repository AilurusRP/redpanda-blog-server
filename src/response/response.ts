import { ResultTypes } from "./result-types";
import { Response } from "express";

class ResponseData {
    success: boolean;
    msg: string;
    constructor(success: boolean, msg = "") {
        this.success = success;
        this.msg = msg;
    }
}

export function createResponseData(res: Response, state: ResultTypes): ResponseData {
    switch (state) {
        case ResultTypes.success:
            return new ResponseData(true);

        case ResultTypes.noValidKey:
            res.status(401);
            return new ResponseData(false, "No Valid Key!");
        case ResultTypes.missingParams:
            res.status(422);
            return new ResponseData(false, "Missing Params!");
        case ResultTypes.invalidDateFormat:
            res.status(422);
            return new ResponseData(false, "Invalid Date Format!");
        case ResultTypes.invalidId:
            res.status(422);
            return new ResponseData(false, "Invalid Id!");

        case ResultTypes.unknownError:
            res.status(500);
            return new ResponseData(false, "Unknown Error!");
    }
}

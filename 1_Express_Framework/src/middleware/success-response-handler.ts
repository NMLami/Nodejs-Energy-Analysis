import { Response } from "express";

export const successResponseHandler = async (res: Response, statusCode: number, message: string, keyOfData?: (string | null), data?: any) => {
    
    const responseResult : {
        status: String;
        statusCode: Number;
        message: String;
        [key: string]: any;
    } = {
        status: "success",
        statusCode: statusCode,
        message: message
    };
    
    if (keyOfData && data) responseResult[keyOfData] = data;
    if (!keyOfData && data) responseResult.data = data;

    return res.status(statusCode).json(responseResult);
};
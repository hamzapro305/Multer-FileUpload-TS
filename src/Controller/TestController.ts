import { NextFunction, Request, Response } from "express";
import { MimeType } from "../@Types/MimeType";
import { UploadService } from "../service/UploadService";
import { GetExtensionFromMime } from "../config/MulterConfig";

class TestController {
    public async uploadFile(req: Request, res: Response, next: NextFunction) {
        try {
            const file = req?.file;
            const uploadService = new UploadService();
            if (file) {
                const fileExt = GetExtensionFromMime(file.mimetype as MimeType["mimeType"])
                await uploadService.uploadDataUsingMemoryStorage(file, `test/${Date.now()}${fileExt}`);
                return res.status(200).json({ message: "File Uploaded!" })
            } else {
                throw new Error("File is empty");
            }
        } catch (error) {
            next(error)
        }


    }
}

export default new TestController()
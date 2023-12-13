import multer from "multer";
import { MimeData, MimeType } from "../@Types/MimeType";


export const GetExtensionFromMime = (Mime: MimeType["mimeType"]): MimeType["ext"] => {
    return MimeData.filter(m => m.mimeType === Mime)[0]?.ext
}

/**
 * Create a configured Multer instance based on the specified parameters.
 *
 * @param {string[]} Types - Allowed file extensions.
 * @param {"DISK" | "RAM"} StorageType - Storage type, either "DISK" for disk storage or "RAM" for memory storage.
 * @returns {multer.Multer} Configured Multer instance.
 */
export const MulterConfigured = (Types: MimeType["ext"][], StorageType: "DISK" | "RAM"): multer.Multer => {
    return multer({

        storage: StorageType === "DISK" ?
            multer.diskStorage({
                destination(req, file, callback) {
                    callback(null, "temp/")
                },
                filename(req, file, callback) {
                    callback(null, Date.now() + ' - ' + file.originalname)
                }
            })
            : multer.memoryStorage(),

        fileFilter: (req, File, cb) => {
            const FileExt = GetExtensionFromMime(File.mimetype as MimeType["mimeType"])
            if (Types.includes(FileExt)) {
                cb(null, true);
            } else {
                cb(
                    new Error(
                        `File of extension: ${FileExt} Not allowed`,
                    )
                );
            }
        },
    })
}


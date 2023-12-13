
import fs from "fs"

export class UploadService {

    public uploadDataUsingMemoryStorage(File: Express.Multer.File, filePath: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            // Use Buffer Tp Upload File
            const Buffer = File.buffer;
        })

    }
    public uploadDataUsingDiskStorage(File: Express.Multer.File, filePath: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            // Use Stream Tp Upload File
            const fileStream = fs.createReadStream(File.path);
            // After Upload Delete file from disk
            this.deleteFile(File.path)
        })

    }

    private deleteFile(path: string) {
        try {
            fs.unlink(path, (error) => {
                if (error) {
                    console.error('Error deleting file:', error);
                } else {
                    // console.log('File deleted successfully');
                }
            });
        } catch (error) {
            console.log(error)
        }
    }
}

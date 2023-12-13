import { Router } from "express";
import { MulterConfigured } from "../config/MulterConfig";
import TestController from "../Controller/TestController";

const TestRouter = Router()
// Multer Instance Created which can accept .apk files and store temporary in RAM
const uploadUsingRam = MulterConfigured([".apk"], { type: "RAM" })
// Multer Instance Created which can accept .apk files and store temporary in RAM
const uploadUsingDisk = MulterConfigured([".apk"], { type: "DISK", destination: "/upload" })

TestRouter.post("/upload", uploadUsingRam.single("file"), TestController.uploadFile)

export default TestRouter
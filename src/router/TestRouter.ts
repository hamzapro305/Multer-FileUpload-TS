import { Router } from "express";
import { MulterConfigured } from "../config/MulterConfig";
import TestController from "../Controller/TestController";

const TestRouter = Router()
const upload = MulterConfigured([".zip", ".json"], "RAM")

TestRouter.post("/upload", upload.single("file"), TestController.uploadFile)

export default TestRouter
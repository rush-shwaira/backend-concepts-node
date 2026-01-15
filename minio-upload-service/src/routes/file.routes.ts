// src/routes/file.routes.ts
import { Router, type Request, type Response } from "express";
import { upload } from "../middleware/multer.js";
import { minioClient, BUCKET_NAME } from "../minio.js";

const router = Router();

router.post(
    "/upload", // Route

    upload.single("file"), // Multer middleware

    async (req: Request, res: Response) => { // Controller
        if (!req.file) {
            return res.status(400).json({ error: "File is required" });
        }
        const objectName = `${Date.now()}-${req.file.originalname}`;

        await minioClient.putObject(
            BUCKET_NAME,
            objectName,
            req.file.buffer,
            req.file.size,
            {
                "Content-Type": req.file.mimetype,
            }
        )
        res.json({
            message: "Upload successful",
            objectName,
        });
    }
)

router.get(
    "/download/:objectName",

    async (req: Request, res: Response) => {
        const { objectName } = req.params;
        const stream = await minioClient.getObject(
            BUCKET_NAME,
            objectName as string
        );
        res.setHeader("Content-Disposition", `attachment; filename="${objectName}"`);
        stream.pipe(res);
    }
)


export default router;
// src/middleware/multer.ts
import multer from "multer"

export const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2 * 1024 * 1024 // 2MB
    }
})
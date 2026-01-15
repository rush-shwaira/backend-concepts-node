// src/server.ts
import app from "./app.js";
import { ensureBucket } from "./minio.js";

const PORT = 3000;

(async () => {
    await ensureBucket();
    app.listen(PORT, () => {
        console.log(`API running on port ${PORT}`);
    });
})();

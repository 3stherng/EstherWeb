import express from 'express';
import { CONFIG, features, isProd } from './config/index.js';
const app = express();
// Basic middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Environment-specific middleware
if (isProd) {
    // Add production-specific middleware
    app.use((req, res, next) => {
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        next();
    });
}
// Basic route
app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Server is up and running",
        environment: CONFIG.env,
        features: features
    });
});
// Development-only routes
if (!isProd) {
    app.get("/debug", (req, res) => {
        res.json({
            config: CONFIG,
            env: process.env
        });
    });
}
// Error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        error: features.detailedErrors ? err.message : 'Internal Server Error'
    });
});
app.listen(CONFIG.server.port, () => {
    console.log(`Server is running in ${CONFIG.env} mode on port ${CONFIG.server.port}`);
});
//# sourceMappingURL=index.js.map
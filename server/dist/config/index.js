import { config } from 'dotenv';
import path from 'path';
// Load environment variables based on environment
const loadEnvConfig = () => {
    // In production (Render), use /etc/secrets/.env
    if (process.env.NODE_ENV === 'production') {
        config({ path: '/etc/secrets/.env' });
        return;
    }
    // In development, use local .env
    const envPath = path.resolve(process.cwd(), '.env');
    config({ path: envPath });
};
// Load environment configuration
loadEnvConfig();
// Configuration object
export const CONFIG = {
    env: process.env.NODE_ENV || 'development',
    server: {
        port: parseInt(process.env.PORT || '3000', 10),
        host: process.env.HOST || 'localhost',
    },
    logging: {
        level: process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'info' : 'debug'),
    },
    // Add more configuration sections as needed
};
// Environment-specific behaviors
export const isProd = CONFIG.env === 'production';
export const isDev = CONFIG.env === 'development';
// Environment-specific features
export const features = {
    enableDebugEndpoints: isDev,
    detailedErrors: isDev,
    securityHeaders: isProd,
    caching: isProd,
};
//# sourceMappingURL=index.js.map
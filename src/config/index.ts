import { configDotenv } from "dotenv";
import path from "node:path";

configDotenv({ quiet: true, path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT || 3000,
  database_url: process.env.DATABASE_URL,
  app_url: process.env.APP_URL,
  bcyrpt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET!,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET!,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN!,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN!,
  stripe_product_id: process.env.STRIPE_PRODUCT_ID!,
  stripe_secret_key: process.env.STRIPE_SECRET_KEY!,
  product_price_id: process.env.PRODUCT_PRICE_ID!,
  stripe_webhook_secret: process.env.STRIPE_WEBHOOK_SECRET!,
};

import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { registry } from "./openapi.js";
import { config } from "./index.js";

const API_BASE_URL = `${config.APP_BASE_URL}/api/v1`;

const generator = new OpenApiGeneratorV3(registry.definitions);

export const swaggerSpec = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    title: "FinTrack API",
    version: "1.0.0",
    description: `For demo use any one for login:-\n
      ADMIN   {"email": "admin@example.com", "password": "admin123"}
      ANALYST {"email": "analyst@example.com", "password": "analyst123"}
      VIEWER  {"email": "viewer@example.com", "password": "viewer123"}`,
  },
  servers: [{ url: API_BASE_URL }],
});

import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { registry } from "./openapi.js";

const API_BASE_URL = "http://localhost:5000/api/v1";

const generator = new OpenApiGeneratorV3(registry.definitions);

export const swaggerSpec = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    title: "FinTrack API",
    version: "1.0.0",
  },
  servers: [{ url: API_BASE_URL }],
});

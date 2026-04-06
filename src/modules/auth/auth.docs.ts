import { registry } from "../../config/openapi.js";
import { LoginRef } from "./auth.validation.js";

registry.registerPath({
  method: "post",
  path: "/auth/login",
  tags: ["Auth"],
  description: "Authenticate user and return JWT token",
  request: {
    body: {
      required: true,
      content: {
        "application/json": {
          schema: LoginRef,
        },
      },
    },
  },
  responses: {
    200: { description: "Login successful" },
    400: { description: "Validation error" },
    401: { description: "Invalid credentials" },
  },
});

registry.registerPath({
  method: "get",
  path: "/auth/me",
  tags: ["Auth"],
  description: "Returns the authenticated user's details",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "Current user data" },
    401: { description: "Unauthorized" },
  },
});

registry.registerPath({
  method: "post",
  path: "/auth/logout",
  tags: ["Auth"],
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "Logout successful" },
    401: { description: "Unauthorized" },
  },
});

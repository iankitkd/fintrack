import { registry } from "#/config/openapi.js";
import { CreateUserRef } from "./user.validation.js";

registry.registerPath({
  method: "post",
  path: "/users",
  tags: ["Users"],
  description: "Create a new user (Admin only).",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      required: true,
      content: {
        "application/json": {
          schema: CreateUserRef,
        },
      },
    },
  },
  responses: {
    201: { description: "User created successfully" },
    400: { description: "Validation error" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

registry.registerPath({
  method: "get",
  path: "/users",
  tags: ["Users"],
  description: "Get all users (Admin only)",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "List of users" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

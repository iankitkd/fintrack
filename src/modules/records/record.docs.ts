import { registry } from "#/config/openapi.js";
import { CreateRecordRef } from "./record.validation.js";

registry.registerPath({
  method: "post",
  path: "/records",
  tags: ["Records"],
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      required: true,
      content: {
        "application/json": {
          schema: CreateRecordRef,
        },
      },
    },
  },
  responses: {
    201: { description: "Record created" },
    400: { description: "Validation error" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

registry.registerPath({
  method: "get",
  path: "/records",
  tags: ["Records"],
  security: [{ bearerAuth: [] }],
  responses: {
    201: { description: "List of records" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

registry.registerPath({
  method: "patch",
  path: "/records{id}",
  tags: ["Records"],
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      in: "path",
      name: "id",
      required: true,
      schema: { type: "string" },
      description: "Record ID",
    },
  ],
  responses: {
    201: { description: "Record updated" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

registry.registerPath({
  method: "delete",
  path: "/records{id}",
  tags: ["Records"],
  security: [{ bearerAuth: [] }],
  parameters: [
    {
      in: "path",
      name: "id",
      required: true,
      schema: { type: "string" },
      description: "Record ID",
    },
  ],
  responses: {
    204: { description: "Record deleted" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

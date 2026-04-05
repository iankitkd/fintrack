import { registry } from "#/config/openapi.js";

registry.registerPath({
  method: "get",
  path: "/dashboard/summary",
  tags: ["Dashboard"],
  description: "Returns overall financial summary",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "Summary data" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

registry.registerPath({
  method: "get",
  path: "/dashboard/categories",
  tags: ["Dashboard"],
  description: "Returns expenses grouped by category",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "Category breakdown" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

registry.registerPath({
  method: "get",
  path: "/dashboard/recent",
  tags: ["Dashboard"],
  description: "Returns latest financial records",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "Recent records" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

registry.registerPath({
  method: "get",
  path: "/dashboard/trends",
  tags: ["Dashboard"],
  description: "Returns time-based financial trends (e.g., monthly).",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "Trend data" },
    401: { description: "Unauthorized" },
    403: { description: "Forbidden" },
  },
});

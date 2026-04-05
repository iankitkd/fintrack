import { Router } from "express";
import authRoutes from "#/modules/auth/auth.routes.js";
import userRoutes from "#/modules/users/user.routes.js";
import recordRoutes from "#/modules/records/record.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/records", recordRoutes);

router.get("/health", (_req, res) => {
  res.json({ status: "OK" });
});

export default router;

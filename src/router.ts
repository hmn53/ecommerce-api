import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.get("*", (_, res) => {
  res.send("Not found!").status(404);
});

export default router;

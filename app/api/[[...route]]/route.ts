import { Hono } from "hono";

import { handle } from "hono/vercel";

import accounts from "./accounts";
import { authMiddleware } from "./middleware";
import { HTTPException } from "hono/http-exception";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", authMiddleware, (c) => {
  return c.json({ message: "Hello, World!" });
});

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  return c.json({ message: "Internal Error" }, 500);
});

const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;

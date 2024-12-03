import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Context, Next } from "hono";
import { HTTPException } from "hono/http-exception";

declare module "hono" {
  interface ContextVariableMap {
    auth?: {
      userId: string;
    };
  }
}

export async function authMiddleware(c: Context, next: Next) {
  // First run clerk middleware
  await clerkMiddleware()(c, async () => {
    // Then check auth
    const auth = getAuth(c);
    if (!auth?.userId) {
      throw new HTTPException(401, {
        res: c.json({ error: "Unauthorized!" }),
      });
    }

    c.set("auth", {
      userId: auth.userId,
    });

    await next();
  });
}

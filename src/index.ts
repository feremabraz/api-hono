import { serve } from "@hono/node-server";
import { Hono } from "hono";
import rpc from "./rpc.js";
import { stackServerApp } from "./stack/server.js";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ hello: "world" });
});

app.get("/api/me", async (c) => {
  const user = await stackServerApp.getUser({ tokenStore: c.req.raw });
  if (!user) {
    return c.json({ user: null }, 401);
  }
  return c.json({ user });
});

app.route("/rpc", rpc);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

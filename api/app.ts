import { Hono } from "./deps.ts";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "hello!" });
});

Deno.serve(app.fetch);
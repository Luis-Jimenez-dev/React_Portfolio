// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";
import morgan from "morgan";

// Optional: Example of using your Base44 SDK server-side
// Set BASE44_API_KEY in your env if you use this route
import Base44 from "@base44/sdk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression());
app.use(express.json());
app.use(morgan("tiny"));

// --- Example API route (adjust to your needs) ---
app.get("/api/ping", (req, res) => {
  res.json({ ok: true, message: "pong" });
});

app.get("/api/base44/me", async (req, res) => {
  try {
    const client = new Base44({
      apiKey: process.env.BASE44_API_KEY,
    });
    const me = await client.me();
    res.json(me);
  } catch (err) {
    res.status(500).json({ error: err?.message || "Base44 error" });
  }
});

// -------- Serve the Vite-built SPA --------
// 1) Build output goes to /dist by default (Vite).
// 2) Serve static assets from /dist.
// 3) Send index.html for all non-API routes for client-side routing.
const distDir = path.join(__dirname, "dist");
app.use(express.static(distDir));

// History-fallback for React Router routes:
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) return next(); // leave API to other handlers
  res.sendFile(path.join(distDir, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running http://localhost:${PORT}`);
});

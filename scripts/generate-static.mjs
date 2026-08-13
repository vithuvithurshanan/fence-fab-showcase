/**
 * Post-build static HTML generator for Firebase Hosting.
 * Starts the built Nitro node-server, fetches each route,
 * and writes the HTML to .output/public.
 *
 * Run after: $env:NITRO_PRESET="node"; npm run build
 * Usage: node scripts/generate-static.mjs
 */

import { createServer } from "node:http";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";

const OUTPUT_DIR = ".output/public";
const PORT = 19823;
const ROUTES = ["/", "/privacy", "/terms"];

// Start the nitro server as a child process
const server = spawn("node", [".output/server/index.mjs"], {
  env: { ...process.env, PORT: String(PORT), HOST: "127.0.0.1" },
  stdio: ["ignore", "pipe", "pipe"],
});

server.stdout.on("data", (d) => process.stdout.write(d));
server.stderr.on("data", (d) => process.stderr.write(d));

// Wait for server to be ready
async function waitForServer(retries = 20) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/`);
      if (res.ok || res.status < 500) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Server did not start in time");
}

async function main() {
  console.log("Starting SSR server...");
  await waitForServer();
  console.log("Server ready. Generating static HTML...\n");

  for (const route of ROUTES) {
    const url = `http://127.0.0.1:${PORT}${route}`;
    const res = await fetch(url);
    const html = await res.text();

    const outPath =
      route === "/"
        ? join(OUTPUT_DIR, "index.html")
        : join(OUTPUT_DIR, route.slice(1), "index.html");

    mkdirSync(join(OUTPUT_DIR, route === "/" ? "" : route.slice(1)), { recursive: true });
    writeFileSync(outPath, html, "utf-8");
    console.log(`✓  ${route}  →  ${outPath}  (${(html.length / 1024).toFixed(1)} KB)`);
  }

  server.kill();
  console.log("\n✅ Static HTML generation complete.");
  console.log("Now run: firebase deploy");
}

main().catch((err) => {
  console.error("Error:", err.message);
  server.kill();
  process.exit(1);
});

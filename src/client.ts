import { hc } from "hono/client";
import type { AppType } from "./rpc.js";

const client = hc<AppType>("http://localhost:3000/rpc");

async function main() {
  try {
    const res = await client.hello.$post({
      json: {
        name: "Hono",
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log("RPC Response:", data.message);
    } else {
      console.error("RPC call failed:", res.status, res.statusText);
      const errorText = await res.text();
      console.error("Error details:", errorText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();

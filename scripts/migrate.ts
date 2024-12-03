import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

(async () => {
  try {
    await migrate(db, { migrationsFolder: "drizzle" });
  } catch (error) {
    console.log("Error during migration: ", error);
    process.exit(1);
  }
})();
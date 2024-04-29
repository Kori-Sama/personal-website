/**
 * This is a script that migrates the database schema to the latest version.
 */

import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { env } from "@/lib/env";

const migrationClient = postgres(env.DATABASE_URL, { max: 1 });

const main = async () => {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "./drizzle",
  });
  await migrationClient.end();
  console.log("Migration successful");
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

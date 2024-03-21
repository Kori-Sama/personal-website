import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { env } from "@/lib/env";

const migrationClient = postgres(env.CONN_STR, { max: 1 });

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "src/lib/db/",
  });
  await migrationClient.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

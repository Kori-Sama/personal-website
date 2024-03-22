import type { Config } from "drizzle-kit";

export default {
  driver: "pg",
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME as string,
  },
  verbose: true,
  strict: true,
} satisfies Config;

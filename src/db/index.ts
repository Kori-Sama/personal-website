import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/lib/env";
import * as schema from "./schema";

const queryClient = postgres(env.DATABASE_URL);
export const db = drizzle(queryClient, { schema });

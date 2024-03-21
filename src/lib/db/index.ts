import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/lib/env";

const queryClient = postgres(env.CONN_STR);
export const db = drizzle(queryClient);

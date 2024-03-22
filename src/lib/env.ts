import { z } from "zod";

const envSchema = z.object({
  LINK_GITHUB: z.string().url(),
  LINK_SOURCE_CODE: z.string().url(),
  LINK_DISCORD: z.string().url(),

  DB_USER: z.string().trim().min(1),
  DB_PASS: z.string().trim().min(1),
  DB_HOST: z.string().trim().min(1),
  DB_PORT: z.string().trim().min(1),
  DB_NAME: z.string().trim().min(1),
  CONN_STR: z.string().trim().min(1),

  JWT_SECRET: z.string().trim().min(1),
  JWT_EXPIRE: z.string().transform(Number),
});

process.env.CONN_STR = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
export const env = envSchema.parse(process.env);
process.env.JWT_EXPIRE *= 60;

type EnvSchemaType = z.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchemaType {}
  }
}

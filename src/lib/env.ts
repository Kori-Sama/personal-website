import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().trim().min(1),

  JWT_SECRET: z.string().trim().min(1),
  JWT_EXPIRE: z.string().transform(Number),
});

const envValidated = envSchema.safeParse(process.env);

if (!envValidated.success) {
  throw new Error(
    "Invalid environment variables: " + envValidated.error.message
  );
}

/**
 * Validated environment variables
 */
export const env = envValidated.data;

// Convert JWT_EXPIRE to minutes
env.JWT_EXPIRE *= 60;

type EnvSchemaType = z.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchemaType {}
  }
}

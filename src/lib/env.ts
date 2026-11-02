import { z } from "zod";

/**
 * Environment schema. `next.config.ts` calls `assertEnv()` so a build with a
 * malformed value fails instead of deploying. Missing optional keys only warn
 * (see `envWarnings`), so a deploy is never blocked by a key that is not set yet.
 */
const optionalString = z.preprocess(
  (v) => (typeof v === "string" && v.trim() === "" ? undefined : v),
  z.string().trim().optional(),
);

export const envSchema = z
  .object({
    RESEND_API_KEY: optionalString.pipe(
      z.string().startsWith("re_", "must be a Resend key (re_...)").optional(),
    ),
    CONTACT_EMAIL_TO: optionalString.pipe(z.email().optional()),
    CONTACT_EMAIL_FROM: optionalString.pipe(
      z
        .string()
        .regex(/^(.+<)?[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+>?$/, "must be an email or 'Name <email>'")
        .optional(),
    ),
    NEXT_PUBLIC_CAL_DISCOVERY_URL: optionalString.pipe(z.url().optional()),
    NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN: optionalString,
    // The CSP allows this origin (src/lib/security-headers.ts).
    NEXT_PUBLIC_POSTHOG_HOST: optionalString.pipe(z.url({ protocol: /^https$/ }).optional()),
    VERCEL_ENV: optionalString,
  });

export type Env = z.infer<typeof envSchema>;

export function parseEnv(source: Record<string, string | undefined>) {
  return envSchema.safeParse(source);
}

export function envWarnings(env: Env): string[] {
  const warnings: string[] = [];
  if (env.VERCEL_ENV === "production" && !env.RESEND_API_KEY) {
    warnings.push("RESEND_API_KEY is not set: enquiry forms will answer 503 and send nothing.");
  }
  return warnings;
}

export function assertEnv(source: Record<string, string | undefined> = process.env) {
  const result = parseEnv(source);
  if (!result.success) {
    const lines = result.error.issues.map((i) => `  ${i.path.join(".")}: ${i.message}`);
    throw new Error(`Invalid environment variables:\n${lines.join("\n")}`);
  }
  for (const warning of envWarnings(result.data)) console.warn(`[env] ${warning}`);
  return result.data;
}

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is required but not set`);
  }
  return value;
}

export const config = {
  PORT: Number(process.env.PORT) || 5000,
  DATABASE_URL: getEnvVar("DATABASE_URL"),
  JWT_SECRET: getEnvVar("JWT_SECRET"),
  APP_BASE_URL: getEnvVar("APP_BASE_URL"),
  NODE_ENV:
    (process.env.NODE_ENV as "development" | "production") || "development",
};

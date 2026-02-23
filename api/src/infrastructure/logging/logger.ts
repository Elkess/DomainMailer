export type LogLevel = "info" | "warn" | "error";

export const logger = {
  log(level: LogLevel, message: string, meta?: Record<string, unknown>): void {
    const payload = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...(meta ?? {})
    };
    if (level === "error") {
      console.error(JSON.stringify(payload));
      return;
    }
    console.log(JSON.stringify(payload));
  },
  info(message: string, meta?: Record<string, unknown>): void {
    this.log("info", message, meta);
  },
  warn(message: string, meta?: Record<string, unknown>): void {
    this.log("warn", message, meta);
  },
  error(message: string, meta?: Record<string, unknown>): void {
    this.log("error", message, meta);
  }
};

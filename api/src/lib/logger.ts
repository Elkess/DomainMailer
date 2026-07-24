import { Request } from "express";

type LogLevel = "INFO" | "WARN" | "ERROR" | "DEBUG";

interface LogContext {
  [key: string]: unknown;
}

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
  white: "\x1b[37m",
  bgRed: "\x1b[41m",
  bold: "\x1b[1m",
  dim: "\x1b[2m"
};

function formatTimestamp(): string {
  return new Date().toISOString();
}

function truncate(str: string, maxLen: number = 200): string {
  if (str.length <= maxLen) return str;
  return str.substring(0, maxLen) + "...";
}

function formatError(error: unknown): { message: string; stack?: string } {
  if (error instanceof Error) {
    return {
      message: error.message,
      stack: error.stack
    };
  }
  if (typeof error === "string") {
    return { message: error };
  }
  try {
    return { message: JSON.stringify(error) };
  } catch {
    return { message: String(error) };
  }
}

function getLevelColor(level: LogLevel): string {
  switch (level) {
    case "ERROR": return colors.red;
    case "WARN": return colors.yellow;
    case "INFO": return colors.green;
    case "DEBUG": return colors.cyan;
    default: return colors.white;
  }
}

function getBoxChar(level: LogLevel): string {
  switch (level) {
    case "ERROR": return "✖";
    case "WARN": return "⚠";
    case "INFO": return "●";
    case "DEBUG": return "◆";
    default: return "•";
  }
}

function printErrorBox(errorMessage: string, context: LogContext, stack?: string): void {
  const timestamp = formatTimestamp();
  const levelColor = colors.red;
  const reset = colors.reset;
  const dim = colors.dim;
  const bold = colors.bold;

  // Build top border with level and timestamp
  const topLine = `${levelColor}${bold}┌─────────────────────────────────────────────────────────────────${reset}`;
  const headerLine = `${levelColor}${bold}│  ${getBoxChar("ERROR")}  ERROR  │  ${timestamp}  ${reset}`;
  const separator = `${levelColor}${bold}├─────────────────────────────────────────────────────────────────${reset}`;
  
  console.error("");
  console.error(topLine);
  console.error(headerLine);
  console.error(separator);

  // Error message
  const wrappedMessage = errorMessage.length > 70 
    ? errorMessage.match(/.{1,70}/g)?.join("\n") ?? errorMessage
    : errorMessage;
  const msgLines = wrappedMessage.split("\n");
  msgLines.forEach(line => {
    console.error(`${levelColor}${bold}│  ${reset}${bold}Message:${reset} ${levelColor}${line}${reset}`);
  });

  // Context (key-value pairs from LogContext)
  if (Object.keys(context).length > 0) {
    console.error(`${dim}├─ Context ─────────────────────────────────────────────────────────────${reset}`);
    for (const [key, value] of Object.entries(context)) {
      const strValue = typeof value === "object" ? truncate(JSON.stringify(value), 150) : truncate(String(value ?? "null"), 150);
      console.error(`${dim}│  ${key}:${reset} ${strValue}`);
    }
  }

  // Stack trace (last few lines for readability)
  if (stack) {
    console.error(`${dim}├─ Stack Trace ─────────────────────────────────────────────────────────${reset}`);
    const stackLines = stack.split("\n");
    stackLines.forEach(line => {
      console.error(`${dim}│  ${reset}${colors.gray}${line}${reset}`);
    });
  }

  // Bottom border
  console.error(`${levelColor}${bold}└─────────────────────────────────────────────────────────────────${reset}`);
  console.error("");
}

function printLogBox(level: LogLevel, message: string, context: LogContext): void {
  if (level === "ERROR") {
    const err = formatError(context.error ?? null);
    delete context.error;
    printErrorBox(message, context, err.stack);
    return;
  }

  const timestamp = formatTimestamp();
  const levelColor = getLevelColor(level);
  const reset = colors.reset;
  const dim = colors.dim;
  const bold = colors.bold;
  const boxChar = getBoxChar(level);

  const topLine = `${levelColor}${bold}┌─────────────────────────────────────────────────────────────────${reset}`;
  const headerLine = `${levelColor}${bold}│  ${boxChar}  ${level}  │  ${timestamp}  ${reset}`;
  const separator = `${levelColor}${bold}├─────────────────────────────────────────────────────────────────${reset}`;
  const bottomLine = `${levelColor}${bold}└─────────────────────────────────────────────────────────────────${reset}`;

  console.log("");
  console.log(topLine);
  console.log(headerLine);
  console.log(separator);

  // Message
  console.log(`${levelColor}${bold}│  ${reset}${bold}Message:${reset} ${levelColor}${message}${reset}`);

  // Context
  if (Object.keys(context).length > 0) {
    console.log(`${dim}├─ Data ────────────────────────────────────────────────────────────────${reset}`);
    for (const [key, value] of Object.entries(context)) {
      const strValue = typeof value === "object" ? truncate(JSON.stringify(value), 150) : truncate(String(value ?? "null"), 150);
      console.log(`${dim}│  ${key}:${reset} ${strValue}`);
    }
  }

  console.log(bottomLine);
  console.log("");
}

function safeStringify(obj: unknown): string {
  try {
    return JSON.stringify(obj);
  } catch {
    return String(obj);
  }
}

export const logger = {
  info(message: string, context: LogContext = {}): void {
    printLogBox("INFO", message, context);
  },

  warn(message: string, context: LogContext = {}): void {
    printLogBox("WARN", message, context);
  },

  error(message: string, context: LogContext = {}): void {
    printLogBox("ERROR", message, context);
  },

  debug(message: string, context: LogContext = {}): void {
    printLogBox("DEBUG", message, context);
  },

  // Helper to log from request context
  requestError(req: Request, error: unknown, extraContext: LogContext = {}): void {
    const formatted = formatError(error);
    const requestContext: LogContext = {
      method: req.method,
      path: req.path,
      query: safeStringify(req.query),
      ...extraContext
    };
    
    // Add user info if available
    if ((req as any).user?.id) {
      requestContext.userId = (req as any).user.id;
    }
    if ((req as any).user?.email) {
      requestContext.userEmail = (req as any).user.email;
    }

    // Add body for non-GET requests (sanitize sensitive fields)
    if (req.method !== "GET" && req.body) {
      const sanitized = { ...req.body };
      if (sanitized.password) sanitized.password = "***";
      if (sanitized.accessToken) sanitized.accessToken = "***";
      if (sanitized.refreshToken) sanitized.refreshToken = "***";
      requestContext.body = truncate(safeStringify(sanitized), 500);
    }

    printErrorBox(formatted.message, requestContext, formatted.stack);
  }
};
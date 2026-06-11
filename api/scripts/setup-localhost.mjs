import crypto from "crypto";
import fs from "fs";
import path from "path";
import readline from "readline";

const root = path.resolve(process.cwd(), "..");
const apiEnvPath = path.resolve(process.cwd(), ".env");
const frontEnvPath = path.resolve(root, "front", ".env");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question, fallback = "") =>
  new Promise((resolve) => {
    rl.question(`${question}${fallback ? ` (${fallback})` : ""}: `, (answer) => {
      resolve(answer.trim() || fallback);
    });
  });

const randomSecret = (bytes = 32) => crypto.randomBytes(bytes).toString("hex");

const run = async () => {
  console.log("\nDomainMailer local setup\n");
  const gmailEnabledInput = await ask("Enable real Gmail sending now? [yes/no]", "no");
  const gmailEnabled = gmailEnabledInput.toLowerCase().startsWith("y");

  let gmailClientId = "";
  let gmailClientSecret = "";

  if (gmailEnabled) {
    gmailClientId = await ask("Google OAuth Client ID");
    gmailClientSecret = await ask("Google OAuth Client Secret");
  }

  const apiEnv = `NODE_ENV=development
PORT=4000
DATABASE_URL=file:./prisma/prisma/dev.db
REDIS_URL=
JWT_SECRET=${randomSecret(32)}
JWT_EXPIRES_IN=7d
BCRYPT_ROUNDS=12
TOKEN_ENCRYPTION_KEY=${randomSecret(32)}
API_RATE_LIMIT_WINDOW_MS=60000
API_RATE_LIMIT_MAX=100
USER_DAILY_MAX_LIMIT=300
GLOBAL_DAILY_MAX_LIMIT=5000
PER_MINUTE_MAX_SEND=20
CAMPAIGN_FAILURE_PAUSE_THRESHOLD=5
GMAIL_ENABLED=${gmailEnabled ? "true" : "false"}
GMAIL_CLIENT_ID=${gmailClientId}
GMAIL_CLIENT_SECRET=${gmailClientSecret}
GMAIL_REDIRECT_URI=http://localhost:4000/api/oauth/gmail/callback
FRONTEND_URL=http://localhost:3000
`;

  const frontEnv = `NEXT_PUBLIC_API_URL=http://localhost:4000/api
`;

  fs.writeFileSync(apiEnvPath, apiEnv, "utf8");
  fs.writeFileSync(frontEnvPath, frontEnv, "utf8");

  console.log("\nCreated:");
  console.log(`- ${apiEnvPath}`);
  console.log(`- ${frontEnvPath}`);

  if (!gmailEnabled) {
    console.log("\nGmail is disabled for now. App will run, but Gmail connect/send is blocked until admin credentials are added.");
  } else {
    console.log("\nGmail is enabled. End-users can connect their own Gmail accounts via OAuth.");
  }

  rl.close();
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

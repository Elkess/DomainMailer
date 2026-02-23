import fs from "fs";
import path from "path";
import { db } from "../src/infrastructure/db/pool";

const run = async (): Promise<void> => {
  const sqlPath = path.resolve(process.cwd(), "db", "init.sql");
  const sql = fs.readFileSync(sqlPath, "utf8");
  await db.query(sql);
  console.log("Database initialized successfully.");
};

run().catch((error: Error) => {
  console.error(error);
  process.exit(1);
});

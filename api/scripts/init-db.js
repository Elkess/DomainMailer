"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pool_1 = require("../src/infrastructure/db/pool");
const run = async () => {
    const sqlPath = path_1.default.resolve(process.cwd(), "db", "init.sql");
    const sql = fs_1.default.readFileSync(sqlPath, "utf8");
    await pool_1.db.query(sql);
    console.log("Database initialized successfully.");
};
run().catch((error) => {
    console.error(error);
    process.exit(1);
});

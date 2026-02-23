import { Pool, PoolClient, QueryResult } from "pg";
import { env } from "../config/env";

const pool = new Pool({
  connectionString: env.DATABASE_URL
});

export const db = {
  query<T>(text: string, values?: unknown[]): Promise<QueryResult<T>> {
    return pool.query<T>(text, values);
  },
  async withTransaction<T>(handler: (client: PoolClient) => Promise<T>): Promise<T> {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const result = await handler(client);
      await client.query("COMMIT");
      return result;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  },
  async getClient(): Promise<PoolClient> {
    return pool.connect();
  }
};

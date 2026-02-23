import "express-async-errors";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env";
import { errorHandler, apiRateLimit } from "./lib/middlewares";
import { createRoutes } from "./routes";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));
app.use(apiRateLimit);

app.use("/api", createRoutes());
app.use(errorHandler);

app.listen(env.PORT, () => {
  console.log(`DomainMailer API running on ${env.PORT}`);
});

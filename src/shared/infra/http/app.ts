import * as dotenv from "dotenv";
import express from "express";

dotenv.config({ path: "./.env" });

const app = express();

export { app };

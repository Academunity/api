import express from "express";
import * as dotenv from "dotenv";

dotenv.config({ path: './.env'})

const app = express()

export { app }
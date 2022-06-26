import { createConnection } from "../typeorm";
import { app } from "./app";

const port = process.env.PORT;

createConnection();

app.listen(port, () => console.log(`Server running on port ${port}`));

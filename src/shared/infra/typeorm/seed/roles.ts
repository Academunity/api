import { v4 as uuidV4 } from "uuid";

import { createConnection } from "../index";

async function create() {
  const connection = await createConnection();
  await connection.query(
    `INSERT INTO roles (id, name)
    VALUES ('${uuidV4()}', 'TEACHER')
    `
  );

  await connection.query(
    `INSERT INTO roles (id, name)
    VALUES ('${uuidV4()}', 'STUDENT')
    `
  );

  await connection.destroy();
}

create().then(() => console.log("Roles created!"));

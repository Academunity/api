import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Role } from "@modules/roles/infra/typeorm/entities/Role";
import { DataSource } from "typeorm";

import { CreateRolesTable1655943524222 } from "./migrations/1655943524222-CreateRolesTable";
import { CreateUsersTable1655951833608 } from "./migrations/1655951833608-CreateUsersTable";

const dataSource = new DataSource({
  type: "mysql",
  host: "database",
  port: 3306,
  username: "root",
  password: "secret",
  database: process.env.NODE_ENV === "test" ? "academunity" : "academunity",
  entities: [Role, User],
  migrations: [CreateRolesTable1655943524222, CreateUsersTable1655951833608],
});

export function createConnection(): Promise<DataSource> {
  return dataSource.initialize();
}

export default dataSource;

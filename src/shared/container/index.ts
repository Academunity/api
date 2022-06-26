import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { RolesRepository } from "@modules/roles/infra/typeorm/repositories/RolesRepository";
import { IRolesRepository } from "@modules/roles/repositories/IRolesRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IRolesRepository>(
  "RolesRepository",
  RolesRepository
);

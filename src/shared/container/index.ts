import { UsersRepository } from "@modules/accounts/infra/prisma/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { RolesRepository } from "@modules/roles/infra/prisma/RolesRepository";
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

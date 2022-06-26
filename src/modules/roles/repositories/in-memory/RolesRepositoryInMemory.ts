import { Role } from "@modules/roles/infra/typeorm/entities/Role";

import { AppError } from "@shared/errors/AppError";

import { IRolesRepository } from "../IRolesRepository";

class RolesRepositoryInMemory implements IRolesRepository {
  roles: Role[] = [];

  constructor() {
    this.roles.push({
      id: "1",
      name: "TEACHER",
      created_at: new Date(),
    });
    this.roles.push({
      id: "2",
      name: "STUDENT",
      created_at: new Date(),
    });
  }

  async findById(id: string): Promise<Role> {
    const role = this.roles.find((role) => role.id === id);
    if (!role) throw new AppError("");

    return role;
  }
}

export { RolesRepositoryInMemory };

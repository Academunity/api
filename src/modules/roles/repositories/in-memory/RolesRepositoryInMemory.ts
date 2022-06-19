import { Roles } from "@prisma/client";

import { IRolesRepository } from "../IRolesRepository";

class RolesRepositoryInMemory implements IRolesRepository {
  roles: Roles[] = [];

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

  async findById(id: string): Promise<Roles | null> {
    return this.roles.find((role) => role.id === id) ?? null;
  }
}

export { RolesRepositoryInMemory };

import { IRolesRepository } from "@modules/roles/repositories/IRolesRepository";
import { Repository } from "typeorm";

import dataSource from "@shared/infra/typeorm";

import { Role } from "../entities/Role";

class RolesRepository implements IRolesRepository {
  private repository: Repository<Role>;

  constructor() {
    this.repository = dataSource.getRepository(Role);
  }

  async findById(id: string): Promise<Role> {
    const role = await this.repository.findOneByOrFail({ id });
    return role;
  }
}

export { RolesRepository };

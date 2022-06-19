import { IRolesRepository } from "@modules/roles/repositories/IRolesRepository";
import { Roles } from "@prisma/client";

import { prisma } from "@shared/infra/prisma";

class RolesRepository implements IRolesRepository {
  async findById(id: string): Promise<Roles | null> {
    return prisma.roles.findUnique({
      where: {
        id,
      },
    });
  }
}

export { RolesRepository };

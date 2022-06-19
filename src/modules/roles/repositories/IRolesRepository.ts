import { Roles } from "@prisma/client";

interface IRolesRepository {
  findById(id: string): Promise<Roles | undefined>;
}

export { IRolesRepository };

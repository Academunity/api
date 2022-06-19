import { Roles } from "@prisma/client";

interface IRolesRepository {
  findById(id: string): Promise<Roles | null>;
}

export { IRolesRepository };

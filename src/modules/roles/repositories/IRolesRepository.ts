import { Role } from "../infra/typeorm/entities/Role";

interface IRolesRepository {
  findById(id: string): Promise<Role>;
}

export { IRolesRepository };

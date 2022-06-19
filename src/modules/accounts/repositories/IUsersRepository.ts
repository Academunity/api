import { Users } from "@prisma/client";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<Users>;
  findByEmail(email: string): Promise<Users | undefined>;
}

export { IUsersRepository };

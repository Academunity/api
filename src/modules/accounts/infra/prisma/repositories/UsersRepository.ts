import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { Users } from "@prisma/client";

import { prisma } from "@shared/infra/prisma";

class UsersRepository implements IUsersRepository {
  async create({
    name,
    email,
    password,
    role_id,
  }: ICreateUserDTO): Promise<Users> {
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password,
        role_id,
      },
    });

    return user;
  }
}

export { UsersRepository };

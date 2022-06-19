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
    return prisma.users.create({
      data: {
        name,
        email,
        password,
        role_id,
      },
    });
  }

  async findByEmail(email: string): Promise<Users | null> {
    return prisma.users.findUnique({
      where: {
        email,
      },
    });
  }
}

export { UsersRepository };

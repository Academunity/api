import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { Users } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";

import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: Users[] = [];

  async create({
    name,
    email,
    password,
    role_id,
  }: ICreateUserDTO): Promise<Users> {
    const user: Users = {
      id: uuidV4(),
      role_id,
      name,
      email,
      password,
      created_at: new Date(),
      updated_at: new Date(),
      verified_at: null,
      icon: null,
      location: null,
      phone: null,
      suspended_at: null,
      deactivated_at: null,
    };

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<Users | undefined> {
    return this.users.find((user) => user.email === email);
  }
}

export { UsersRepositoryInMemory };

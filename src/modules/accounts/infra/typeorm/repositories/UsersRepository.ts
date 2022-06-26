import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { Repository } from "typeorm";

import dataSource from "@shared/infra/typeorm";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({
    name,
    email,
    password,
    role_id,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.repository.create({
      name,
      email,
      password,
      role_id,
    });
    await this.repository.save(user);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user =
      (await this.repository.findOneBy({
        email,
      })) ?? null;
    return user;
  }
}

export { UsersRepository };

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IRolesRepository } from "@modules/roles/repositories/IRolesRepository";
import { Users } from "@prisma/client";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/container/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    private rolesRepository: IRolesRepository
  ) {}

  async execute({
    name,
    email,
    password,
    role_id,
  }: ICreateUserDTO): Promise<Users> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) throw new AppError("Email is already being used");

    const roleExists = await this.rolesRepository.findById(role_id);

    if (!roleExists) throw new AppError("Role does not exists");

    const passwordHashed = await hash(password, 8);
    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHashed,
      role_id,
    });
    return user;
  }
}

export { CreateUserUseCase };

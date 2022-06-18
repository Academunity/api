import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { Users } from "@prisma/client";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    role_id,
  }: ICreateUserDTO): Promise<Users> {
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

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { hash } from "bcrypt";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const passwordHashed = await hash(password, 8);
    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHashed,
    });
    return user;
  }
}

export { CreateUserUseCase };

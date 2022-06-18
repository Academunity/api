import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
}

export { IUsersRepository };

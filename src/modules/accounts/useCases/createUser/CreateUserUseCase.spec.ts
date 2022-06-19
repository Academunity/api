import "reflect-metadata";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";

import { AppError } from "@shared/container/errors/AppError";

import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Create user Unit", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user = await createUserUseCase.execute({
      name: "John Doe",
      role_id: "123456",
      email: "johndoe@gmail.com",
      password: "123456",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create a new user with existent email", async () => {
    await createUserUseCase.execute({
      name: "John Doe",
      role_id: "123456",
      email: "johndoe@gmail.com",
      password: "123456",
    });

    await expect(
      createUserUseCase.execute({
        name: "John Doe",
        role_id: "123456",
        email: "johndoe@gmail.com",
        password: "123456",
      })
    ).rejects.toEqual(new AppError("Email is already being used"));
  });
});

import "reflect-metadata";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { RolesRepositoryInMemory } from "@modules/roles/repositories/in-memory/RolesRepositoryInMemory";

import { AppError } from "@shared/container/errors/AppError";

import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let rolesRepositoryInMemory: RolesRepositoryInMemory;

describe("Create user Unit", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    rolesRepositoryInMemory = new RolesRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      rolesRepositoryInMemory
    );
  });

  it("should be able to create a new user", async () => {
    const user = await createUserUseCase.execute({
      name: "John Doe",
      role_id: "1",
      email: "johndoe@gmail.com",
      password: "123456",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create a new user with existent email", async () => {
    await createUserUseCase.execute({
      name: "John Doe",
      role_id: "1",
      email: "johndoe@gmail.com",
      password: "123456",
    });

    await expect(
      createUserUseCase.execute({
        name: "John Doe",
        role_id: "1",
        email: "johndoe@gmail.com",
        password: "123456",
      })
    ).rejects.toEqual(new AppError("Email is already being used"));
  });

  it("should not be able to create a new user with non existent role", async () => {
    await expect(
      createUserUseCase.execute({
        name: "John Doe",
        role_id: "123456",
        email: "johndoe@gmail.com",
        password: "123456",
      })
    ).rejects.toEqual(new AppError("Role does not exists"));
  });
});

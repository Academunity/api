import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1655951833608 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar(36)",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            isUnique: true,
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "verified_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "icon",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "location",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "phone",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "suspended_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "deactivated_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "role_id",
            type: "varchar(36)",
          },
        ],
        foreignKeys: [
          {
            name: "FKRoleUser",
            referencedTableName: "roles",
            referencedColumnNames: ["id"],
            columnNames: ["role_id"],
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}

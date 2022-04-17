import * as TypeGraphQL from "type-graphql";

export enum UserRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(UserRoleEnum, {
  name: "UserRoleEnum",
  description: undefined,
});

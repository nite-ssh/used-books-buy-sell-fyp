import * as TypeGraphQL from "type-graphql";

export enum BookStateEnum {
  SOLD = "SOLD",
  DONATED = "DONATED",
  TO_BE_DONATED = "TO_BE_DONATED",
  TO_BE_SOLD = "TO_BE_SOLD"
}
TypeGraphQL.registerEnumType(BookStateEnum, {
  name: "BookStateEnum",
  description: undefined,
});

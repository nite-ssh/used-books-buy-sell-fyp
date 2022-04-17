import * as TypeGraphQL from "type-graphql";

export enum BookCategoryScalarFieldEnum {
  name = "name",
  description = "description"
}
TypeGraphQL.registerEnumType(BookCategoryScalarFieldEnum, {
  name: "BookCategoryScalarFieldEnum",
  description: undefined,
});

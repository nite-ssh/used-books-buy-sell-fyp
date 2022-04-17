import * as TypeGraphQL from "type-graphql";

export enum BookScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  userId = "userId",
  price = "price",
  author = "author",
  bookPhoto = "bookPhoto",
  bookStateName = "bookStateName",
  bookCategoryName = "bookCategoryName"
}
TypeGraphQL.registerEnumType(BookScalarFieldEnum, {
  name: "BookScalarFieldEnum",
  description: undefined,
});

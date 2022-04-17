import * as TypeGraphQL from "type-graphql";

export enum BookUnverifiedScalarFieldEnum {
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
TypeGraphQL.registerEnumType(BookUnverifiedScalarFieldEnum, {
  name: "BookUnverifiedScalarFieldEnum",
  description: undefined,
});

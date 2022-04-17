import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateNestedOneWithoutBookUnverifiedInput } from "./BookCategoryCreateNestedOneWithoutBookUnverifiedInput";
import { BookStateCreateNestedOneWithoutBookUnverifiedInput } from "./BookStateCreateNestedOneWithoutBookUnverifiedInput";
import { UserCreateNestedOneWithoutBookUnverifiedInput } from "./UserCreateNestedOneWithoutBookUnverifiedInput";

@TypeGraphQL.InputType("BookUnverifiedCreateWithoutTransactionInput", {
  isAbstract: true
})
export class BookUnverifiedCreateWithoutTransactionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookPhoto?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookUnverifiedInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBookUnverifiedInput;

  @TypeGraphQL.Field(_type => BookStateCreateNestedOneWithoutBookUnverifiedInput, {
    nullable: false
  })
  bookState!: BookStateCreateNestedOneWithoutBookUnverifiedInput;

  @TypeGraphQL.Field(_type => BookCategoryCreateNestedOneWithoutBookUnverifiedInput, {
    nullable: false
  })
  bookCategory!: BookCategoryCreateNestedOneWithoutBookUnverifiedInput;
}

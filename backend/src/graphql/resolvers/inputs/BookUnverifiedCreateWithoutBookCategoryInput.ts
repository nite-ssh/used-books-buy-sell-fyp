import * as TypeGraphQL from "type-graphql";
import { BookStateCreateNestedOneWithoutBookUnverifiedInput } from "./BookStateCreateNestedOneWithoutBookUnverifiedInput";
import { TransactionCreateNestedManyWithoutBookUnverifiedInput } from "./TransactionCreateNestedManyWithoutBookUnverifiedInput";
import { UserCreateNestedOneWithoutBookUnverifiedInput } from "./UserCreateNestedOneWithoutBookUnverifiedInput";

@TypeGraphQL.InputType("BookUnverifiedCreateWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUnverifiedCreateWithoutBookCategoryInput {
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

  @TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutBookUnverifiedInput, {
    nullable: true
  })
  transaction?: TransactionCreateNestedManyWithoutBookUnverifiedInput | undefined;
}

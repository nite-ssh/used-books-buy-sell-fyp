import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateNestedOneWithoutBooksInput } from "./BookCategoryCreateNestedOneWithoutBooksInput";
import { BookStateCreateNestedOneWithoutBooksInput } from "./BookStateCreateNestedOneWithoutBooksInput";
import { TransactionCreateNestedManyWithoutBookInput } from "./TransactionCreateNestedManyWithoutBookInput";

@TypeGraphQL.InputType("BookCreateWithoutUserInput", {
  isAbstract: true
})
export class BookCreateWithoutUserInput {
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

  @TypeGraphQL.Field(_type => BookStateCreateNestedOneWithoutBooksInput, {
    nullable: false
  })
  bookState!: BookStateCreateNestedOneWithoutBooksInput;

  @TypeGraphQL.Field(_type => BookCategoryCreateNestedOneWithoutBooksInput, {
    nullable: false
  })
  bookCategory!: BookCategoryCreateNestedOneWithoutBooksInput;

  @TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutBookInput, {
    nullable: true
  })
  transaction?: TransactionCreateNestedManyWithoutBookInput | undefined;
}

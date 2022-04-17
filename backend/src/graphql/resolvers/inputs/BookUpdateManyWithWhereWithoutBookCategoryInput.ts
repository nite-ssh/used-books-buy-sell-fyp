import * as TypeGraphQL from "type-graphql";
import { BookScalarWhereInput } from "./BookScalarWhereInput";
import { BookUpdateManyMutationInput } from "./BookUpdateManyMutationInput";

@TypeGraphQL.InputType("BookUpdateManyWithWhereWithoutBookCategoryInput", {
  isAbstract: true
})
export class BookUpdateManyWithWhereWithoutBookCategoryInput {
  @TypeGraphQL.Field(_type => BookScalarWhereInput, {
    nullable: false
  })
  where!: BookScalarWhereInput;

  @TypeGraphQL.Field(_type => BookUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookUpdateManyMutationInput;
}

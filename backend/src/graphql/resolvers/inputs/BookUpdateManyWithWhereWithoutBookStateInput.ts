import * as TypeGraphQL from "type-graphql";
import { BookScalarWhereInput } from "./BookScalarWhereInput";
import { BookUpdateManyMutationInput } from "./BookUpdateManyMutationInput";

@TypeGraphQL.InputType("BookUpdateManyWithWhereWithoutBookStateInput", {
  isAbstract: true
})
export class BookUpdateManyWithWhereWithoutBookStateInput {
  @TypeGraphQL.Field(_type => BookScalarWhereInput, {
    nullable: false
  })
  where!: BookScalarWhereInput;

  @TypeGraphQL.Field(_type => BookUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookUpdateManyMutationInput;
}

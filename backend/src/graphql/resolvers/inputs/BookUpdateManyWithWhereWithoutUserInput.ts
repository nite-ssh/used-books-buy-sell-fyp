import * as TypeGraphQL from "type-graphql";
import { BookScalarWhereInput } from "./BookScalarWhereInput";
import { BookUpdateManyMutationInput } from "./BookUpdateManyMutationInput";

@TypeGraphQL.InputType("BookUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class BookUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => BookScalarWhereInput, {
    nullable: false
  })
  where!: BookScalarWhereInput;

  @TypeGraphQL.Field(_type => BookUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookUpdateManyMutationInput;
}

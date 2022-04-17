import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedScalarWhereInput } from "./BookUnverifiedScalarWhereInput";
import { BookUnverifiedUpdateManyMutationInput } from "./BookUnverifiedUpdateManyMutationInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => BookUnverifiedScalarWhereInput, {
    nullable: false
  })
  where!: BookUnverifiedScalarWhereInput;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookUnverifiedUpdateManyMutationInput;
}

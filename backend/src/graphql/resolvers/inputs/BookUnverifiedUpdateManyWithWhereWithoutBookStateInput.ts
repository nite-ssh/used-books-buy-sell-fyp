import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedScalarWhereInput } from "./BookUnverifiedScalarWhereInput";
import { BookUnverifiedUpdateManyMutationInput } from "./BookUnverifiedUpdateManyMutationInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateManyWithWhereWithoutBookStateInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateManyWithWhereWithoutBookStateInput {
  @TypeGraphQL.Field(_type => BookUnverifiedScalarWhereInput, {
    nullable: false
  })
  where!: BookUnverifiedScalarWhereInput;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookUnverifiedUpdateManyMutationInput;
}

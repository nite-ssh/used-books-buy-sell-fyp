import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateInput } from "../../../inputs/BookUnverifiedUpdateInput";
import { BookUnverifiedWhereUniqueInput } from "../../../inputs/BookUnverifiedWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookUnverifiedArgs {
  @TypeGraphQL.Field(_type => BookUnverifiedUpdateInput, {
    nullable: false
  })
  data!: BookUnverifiedUpdateInput;

  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;
}

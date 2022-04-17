import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateInput } from "../../../inputs/BookUnverifiedCreateInput";
import { BookUnverifiedUpdateInput } from "../../../inputs/BookUnverifiedUpdateInput";
import { BookUnverifiedWhereUniqueInput } from "../../../inputs/BookUnverifiedWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookUnverifiedArgs {
  @TypeGraphQL.Field(_type => BookUnverifiedWhereUniqueInput, {
    nullable: false
  })
  where!: BookUnverifiedWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateInput, {
    nullable: false
  })
  create!: BookUnverifiedCreateInput;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateInput, {
    nullable: false
  })
  update!: BookUnverifiedUpdateInput;
}

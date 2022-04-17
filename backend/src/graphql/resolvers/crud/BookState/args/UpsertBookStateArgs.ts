import * as TypeGraphQL from "type-graphql";
import { BookStateCreateInput } from "../../../inputs/BookStateCreateInput";
import { BookStateUpdateInput } from "../../../inputs/BookStateUpdateInput";
import { BookStateWhereUniqueInput } from "../../../inputs/BookStateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBookStateArgs {
  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: false
  })
  where!: BookStateWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookStateCreateInput, {
    nullable: false
  })
  create!: BookStateCreateInput;

  @TypeGraphQL.Field(_type => BookStateUpdateInput, {
    nullable: false
  })
  update!: BookStateUpdateInput;
}

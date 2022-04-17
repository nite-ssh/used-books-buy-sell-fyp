import * as TypeGraphQL from "type-graphql";
import { BookStateUpdateInput } from "../../../inputs/BookStateUpdateInput";
import { BookStateWhereUniqueInput } from "../../../inputs/BookStateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBookStateArgs {
  @TypeGraphQL.Field(_type => BookStateUpdateInput, {
    nullable: false
  })
  data!: BookStateUpdateInput;

  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: false
  })
  where!: BookStateWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import { BookStateWhereUniqueInput } from "../../../inputs/BookStateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBookStateArgs {
  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: false
  })
  where!: BookStateWhereUniqueInput;
}

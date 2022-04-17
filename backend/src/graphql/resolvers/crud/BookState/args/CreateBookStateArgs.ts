import * as TypeGraphQL from "type-graphql";
import { BookStateCreateInput } from "../../../inputs/BookStateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookStateArgs {
  @TypeGraphQL.Field(_type => BookStateCreateInput, {
    nullable: false
  })
  data!: BookStateCreateInput;
}

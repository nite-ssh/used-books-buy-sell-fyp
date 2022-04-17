import * as TypeGraphQL from "type-graphql";
import { BookStateWhereInput } from "../../../inputs/BookStateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookStateArgs {
  @TypeGraphQL.Field(_type => BookStateWhereInput, {
    nullable: true
  })
  where?: BookStateWhereInput | undefined;
}

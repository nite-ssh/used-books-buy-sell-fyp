import * as TypeGraphQL from "type-graphql";
import { BookStateCreateManyInput } from "../../../inputs/BookStateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookStateArgs {
  @TypeGraphQL.Field(_type => [BookStateCreateManyInput], {
    nullable: false
  })
  data!: BookStateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

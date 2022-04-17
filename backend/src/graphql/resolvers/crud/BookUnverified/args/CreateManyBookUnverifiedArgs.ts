import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyInput } from "../../../inputs/BookUnverifiedCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookUnverifiedArgs {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateManyInput], {
    nullable: false
  })
  data!: BookUnverifiedCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

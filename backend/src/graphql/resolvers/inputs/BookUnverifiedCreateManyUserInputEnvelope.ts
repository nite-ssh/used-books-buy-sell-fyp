import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyUserInput } from "./BookUnverifiedCreateManyUserInput";

@TypeGraphQL.InputType("BookUnverifiedCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class BookUnverifiedCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateManyUserInput], {
    nullable: false
  })
  data!: BookUnverifiedCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

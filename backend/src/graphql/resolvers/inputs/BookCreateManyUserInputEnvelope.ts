import * as TypeGraphQL from "type-graphql";
import { BookCreateManyUserInput } from "./BookCreateManyUserInput";

@TypeGraphQL.InputType("BookCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class BookCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BookCreateManyUserInput], {
    nullable: false
  })
  data!: BookCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

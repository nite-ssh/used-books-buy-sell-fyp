import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyBookStateInput } from "./BookUnverifiedCreateManyBookStateInput";

@TypeGraphQL.InputType("BookUnverifiedCreateManyBookStateInputEnvelope", {
  isAbstract: true
})
export class BookUnverifiedCreateManyBookStateInputEnvelope {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateManyBookStateInput], {
    nullable: false
  })
  data!: BookUnverifiedCreateManyBookStateInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

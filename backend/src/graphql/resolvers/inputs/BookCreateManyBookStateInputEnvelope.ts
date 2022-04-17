import * as TypeGraphQL from "type-graphql";
import { BookCreateManyBookStateInput } from "./BookCreateManyBookStateInput";

@TypeGraphQL.InputType("BookCreateManyBookStateInputEnvelope", {
  isAbstract: true
})
export class BookCreateManyBookStateInputEnvelope {
  @TypeGraphQL.Field(_type => [BookCreateManyBookStateInput], {
    nullable: false
  })
  data!: BookCreateManyBookStateInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import { BookCreateManyBookCategoryInput } from "./BookCreateManyBookCategoryInput";

@TypeGraphQL.InputType("BookCreateManyBookCategoryInputEnvelope", {
  isAbstract: true
})
export class BookCreateManyBookCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [BookCreateManyBookCategoryInput], {
    nullable: false
  })
  data!: BookCreateManyBookCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

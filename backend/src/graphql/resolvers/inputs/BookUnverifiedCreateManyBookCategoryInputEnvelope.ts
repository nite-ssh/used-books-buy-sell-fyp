import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyBookCategoryInput } from "./BookUnverifiedCreateManyBookCategoryInput";

@TypeGraphQL.InputType("BookUnverifiedCreateManyBookCategoryInputEnvelope", {
  isAbstract: true
})
export class BookUnverifiedCreateManyBookCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateManyBookCategoryInput], {
    nullable: false
  })
  data!: BookUnverifiedCreateManyBookCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

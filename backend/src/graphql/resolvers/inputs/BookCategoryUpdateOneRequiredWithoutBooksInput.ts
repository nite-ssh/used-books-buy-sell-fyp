import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateOrConnectWithoutBooksInput } from "./BookCategoryCreateOrConnectWithoutBooksInput";
import { BookCategoryCreateWithoutBooksInput } from "./BookCategoryCreateWithoutBooksInput";
import { BookCategoryUpdateWithoutBooksInput } from "./BookCategoryUpdateWithoutBooksInput";
import { BookCategoryUpsertWithoutBooksInput } from "./BookCategoryUpsertWithoutBooksInput";
import { BookCategoryWhereUniqueInput } from "./BookCategoryWhereUniqueInput";

@TypeGraphQL.InputType("BookCategoryUpdateOneRequiredWithoutBooksInput", {
  isAbstract: true
})
export class BookCategoryUpdateOneRequiredWithoutBooksInput {
  @TypeGraphQL.Field(_type => BookCategoryCreateWithoutBooksInput, {
    nullable: true
  })
  create?: BookCategoryCreateWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryCreateOrConnectWithoutBooksInput, {
    nullable: true
  })
  connectOrCreate?: BookCategoryCreateOrConnectWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryUpsertWithoutBooksInput, {
    nullable: true
  })
  upsert?: BookCategoryUpsertWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: BookCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryUpdateWithoutBooksInput, {
    nullable: true
  })
  update?: BookCategoryUpdateWithoutBooksInput | undefined;
}

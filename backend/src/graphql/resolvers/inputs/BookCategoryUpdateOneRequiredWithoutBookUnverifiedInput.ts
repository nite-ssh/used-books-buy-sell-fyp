import * as TypeGraphQL from "type-graphql";
import { BookCategoryCreateOrConnectWithoutBookUnverifiedInput } from "./BookCategoryCreateOrConnectWithoutBookUnverifiedInput";
import { BookCategoryCreateWithoutBookUnverifiedInput } from "./BookCategoryCreateWithoutBookUnverifiedInput";
import { BookCategoryUpdateWithoutBookUnverifiedInput } from "./BookCategoryUpdateWithoutBookUnverifiedInput";
import { BookCategoryUpsertWithoutBookUnverifiedInput } from "./BookCategoryUpsertWithoutBookUnverifiedInput";
import { BookCategoryWhereUniqueInput } from "./BookCategoryWhereUniqueInput";

@TypeGraphQL.InputType("BookCategoryUpdateOneRequiredWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookCategoryUpdateOneRequiredWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => BookCategoryCreateWithoutBookUnverifiedInput, {
    nullable: true
  })
  create?: BookCategoryCreateWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryCreateOrConnectWithoutBookUnverifiedInput, {
    nullable: true
  })
  connectOrCreate?: BookCategoryCreateOrConnectWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryUpsertWithoutBookUnverifiedInput, {
    nullable: true
  })
  upsert?: BookCategoryUpsertWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: BookCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookCategoryUpdateWithoutBookUnverifiedInput, {
    nullable: true
  })
  update?: BookCategoryUpdateWithoutBookUnverifiedInput | undefined;
}

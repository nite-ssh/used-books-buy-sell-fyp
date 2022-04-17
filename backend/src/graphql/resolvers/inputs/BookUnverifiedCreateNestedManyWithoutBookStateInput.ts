import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyBookStateInputEnvelope } from "./BookUnverifiedCreateManyBookStateInputEnvelope";
import { BookUnverifiedCreateOrConnectWithoutBookStateInput } from "./BookUnverifiedCreateOrConnectWithoutBookStateInput";
import { BookUnverifiedCreateWithoutBookStateInput } from "./BookUnverifiedCreateWithoutBookStateInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedCreateNestedManyWithoutBookStateInput", {
  isAbstract: true
})
export class BookUnverifiedCreateNestedManyWithoutBookStateInput {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateWithoutBookStateInput], {
    nullable: true
  })
  create?: BookUnverifiedCreateWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedCreateOrConnectWithoutBookStateInput], {
    nullable: true
  })
  connectOrCreate?: BookUnverifiedCreateOrConnectWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateManyBookStateInputEnvelope, {
    nullable: true
  })
  createMany?: BookUnverifiedCreateManyBookStateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  connect?: BookUnverifiedWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import { BookCreateManyBookStateInputEnvelope } from "./BookCreateManyBookStateInputEnvelope";
import { BookCreateOrConnectWithoutBookStateInput } from "./BookCreateOrConnectWithoutBookStateInput";
import { BookCreateWithoutBookStateInput } from "./BookCreateWithoutBookStateInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedManyWithoutBookStateInput", {
  isAbstract: true
})
export class BookCreateNestedManyWithoutBookStateInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutBookStateInput], {
    nullable: true
  })
  create?: BookCreateWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutBookStateInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyBookStateInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyBookStateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;
}

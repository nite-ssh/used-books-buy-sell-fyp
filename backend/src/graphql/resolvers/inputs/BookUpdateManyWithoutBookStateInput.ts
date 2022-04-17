import * as TypeGraphQL from "type-graphql";
import { BookCreateManyBookStateInputEnvelope } from "./BookCreateManyBookStateInputEnvelope";
import { BookCreateOrConnectWithoutBookStateInput } from "./BookCreateOrConnectWithoutBookStateInput";
import { BookCreateWithoutBookStateInput } from "./BookCreateWithoutBookStateInput";
import { BookScalarWhereInput } from "./BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutBookStateInput } from "./BookUpdateManyWithWhereWithoutBookStateInput";
import { BookUpdateWithWhereUniqueWithoutBookStateInput } from "./BookUpdateWithWhereUniqueWithoutBookStateInput";
import { BookUpsertWithWhereUniqueWithoutBookStateInput } from "./BookUpsertWithWhereUniqueWithoutBookStateInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateManyWithoutBookStateInput", {
  isAbstract: true
})
export class BookUpdateManyWithoutBookStateInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutBookStateInput], {
    nullable: true
  })
  create?: BookCreateWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutBookStateInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutBookStateInput], {
    nullable: true
  })
  upsert?: BookUpsertWithWhereUniqueWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyBookStateInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyBookStateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  set?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  delete?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutBookStateInput], {
    nullable: true
  })
  update?: BookUpdateWithWhereUniqueWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutBookStateInput], {
    nullable: true
  })
  updateMany?: BookUpdateManyWithWhereWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookScalarWhereInput[] | undefined;
}

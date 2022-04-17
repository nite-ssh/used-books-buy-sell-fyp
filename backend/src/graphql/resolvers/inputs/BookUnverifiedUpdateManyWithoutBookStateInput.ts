import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyBookStateInputEnvelope } from "./BookUnverifiedCreateManyBookStateInputEnvelope";
import { BookUnverifiedCreateOrConnectWithoutBookStateInput } from "./BookUnverifiedCreateOrConnectWithoutBookStateInput";
import { BookUnverifiedCreateWithoutBookStateInput } from "./BookUnverifiedCreateWithoutBookStateInput";
import { BookUnverifiedScalarWhereInput } from "./BookUnverifiedScalarWhereInput";
import { BookUnverifiedUpdateManyWithWhereWithoutBookStateInput } from "./BookUnverifiedUpdateManyWithWhereWithoutBookStateInput";
import { BookUnverifiedUpdateWithWhereUniqueWithoutBookStateInput } from "./BookUnverifiedUpdateWithWhereUniqueWithoutBookStateInput";
import { BookUnverifiedUpsertWithWhereUniqueWithoutBookStateInput } from "./BookUnverifiedUpsertWithWhereUniqueWithoutBookStateInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedUpdateManyWithoutBookStateInput", {
  isAbstract: true
})
export class BookUnverifiedUpdateManyWithoutBookStateInput {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateWithoutBookStateInput], {
    nullable: true
  })
  create?: BookUnverifiedCreateWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedCreateOrConnectWithoutBookStateInput], {
    nullable: true
  })
  connectOrCreate?: BookUnverifiedCreateOrConnectWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedUpsertWithWhereUniqueWithoutBookStateInput], {
    nullable: true
  })
  upsert?: BookUnverifiedUpsertWithWhereUniqueWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateManyBookStateInputEnvelope, {
    nullable: true
  })
  createMany?: BookUnverifiedCreateManyBookStateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  set?: BookUnverifiedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookUnverifiedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  delete?: BookUnverifiedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  connect?: BookUnverifiedWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedUpdateWithWhereUniqueWithoutBookStateInput], {
    nullable: true
  })
  update?: BookUnverifiedUpdateWithWhereUniqueWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedUpdateManyWithWhereWithoutBookStateInput], {
    nullable: true
  })
  updateMany?: BookUnverifiedUpdateManyWithWhereWithoutBookStateInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookUnverifiedScalarWhereInput[] | undefined;
}

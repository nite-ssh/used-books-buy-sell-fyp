import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedCreateManyUserInputEnvelope } from "./BookUnverifiedCreateManyUserInputEnvelope";
import { BookUnverifiedCreateOrConnectWithoutUserInput } from "./BookUnverifiedCreateOrConnectWithoutUserInput";
import { BookUnverifiedCreateWithoutUserInput } from "./BookUnverifiedCreateWithoutUserInput";
import { BookUnverifiedWhereUniqueInput } from "./BookUnverifiedWhereUniqueInput";

@TypeGraphQL.InputType("BookUnverifiedCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class BookUnverifiedCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookUnverifiedCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookUnverifiedCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookUnverifiedCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookUnverifiedCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookUnverifiedWhereUniqueInput], {
    nullable: true
  })
  connect?: BookUnverifiedWhereUniqueInput[] | undefined;
}

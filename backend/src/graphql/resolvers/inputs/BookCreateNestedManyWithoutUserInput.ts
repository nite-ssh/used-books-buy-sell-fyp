import * as TypeGraphQL from "type-graphql";
import { BookCreateManyUserInputEnvelope } from "./BookCreateManyUserInputEnvelope";
import { BookCreateOrConnectWithoutUserInput } from "./BookCreateOrConnectWithoutUserInput";
import { BookCreateWithoutUserInput } from "./BookCreateWithoutUserInput";
import { BookWhereUniqueInput } from "./BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class BookCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;
}

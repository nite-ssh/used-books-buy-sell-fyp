import * as TypeGraphQL from "type-graphql";
import { BookStateCreateOrConnectWithoutBookUnverifiedInput } from "./BookStateCreateOrConnectWithoutBookUnverifiedInput";
import { BookStateCreateWithoutBookUnverifiedInput } from "./BookStateCreateWithoutBookUnverifiedInput";
import { BookStateWhereUniqueInput } from "./BookStateWhereUniqueInput";

@TypeGraphQL.InputType("BookStateCreateNestedOneWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookStateCreateNestedOneWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => BookStateCreateWithoutBookUnverifiedInput, {
    nullable: true
  })
  create?: BookStateCreateWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookStateCreateOrConnectWithoutBookUnverifiedInput, {
    nullable: true
  })
  connectOrCreate?: BookStateCreateOrConnectWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: true
  })
  connect?: BookStateWhereUniqueInput | undefined;
}

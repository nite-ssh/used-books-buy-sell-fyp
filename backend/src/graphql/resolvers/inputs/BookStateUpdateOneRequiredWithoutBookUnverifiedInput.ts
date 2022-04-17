import * as TypeGraphQL from "type-graphql";
import { BookStateCreateOrConnectWithoutBookUnverifiedInput } from "./BookStateCreateOrConnectWithoutBookUnverifiedInput";
import { BookStateCreateWithoutBookUnverifiedInput } from "./BookStateCreateWithoutBookUnverifiedInput";
import { BookStateUpdateWithoutBookUnverifiedInput } from "./BookStateUpdateWithoutBookUnverifiedInput";
import { BookStateUpsertWithoutBookUnverifiedInput } from "./BookStateUpsertWithoutBookUnverifiedInput";
import { BookStateWhereUniqueInput } from "./BookStateWhereUniqueInput";

@TypeGraphQL.InputType("BookStateUpdateOneRequiredWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookStateUpdateOneRequiredWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => BookStateCreateWithoutBookUnverifiedInput, {
    nullable: true
  })
  create?: BookStateCreateWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookStateCreateOrConnectWithoutBookUnverifiedInput, {
    nullable: true
  })
  connectOrCreate?: BookStateCreateOrConnectWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookStateUpsertWithoutBookUnverifiedInput, {
    nullable: true
  })
  upsert?: BookStateUpsertWithoutBookUnverifiedInput | undefined;

  @TypeGraphQL.Field(_type => BookStateWhereUniqueInput, {
    nullable: true
  })
  connect?: BookStateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookStateUpdateWithoutBookUnverifiedInput, {
    nullable: true
  })
  update?: BookStateUpdateWithoutBookUnverifiedInput | undefined;
}

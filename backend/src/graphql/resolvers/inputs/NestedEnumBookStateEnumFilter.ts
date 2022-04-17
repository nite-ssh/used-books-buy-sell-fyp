import * as TypeGraphQL from "type-graphql";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.InputType("NestedEnumBookStateEnumFilter", {
  isAbstract: true
})
export class NestedEnumBookStateEnumFilter {
  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: true
  })
  equals?: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD" | undefined;

  @TypeGraphQL.Field(_type => [BookStateEnum], {
    nullable: true
  })
  in?: Array<"SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD"> | undefined;

  @TypeGraphQL.Field(_type => [BookStateEnum], {
    nullable: true
  })
  notIn?: Array<"SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBookStateEnumFilter, {
    nullable: true
  })
  not?: NestedEnumBookStateEnumFilter | undefined;
}

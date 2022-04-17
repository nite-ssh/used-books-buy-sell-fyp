import * as TypeGraphQL from "type-graphql";
import { NestedEnumBookStateEnumFilter } from "./NestedEnumBookStateEnumFilter";
import { NestedIntFilter } from "./NestedIntFilter";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.InputType("NestedEnumBookStateEnumWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumBookStateEnumWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumBookStateEnumWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBookStateEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBookStateEnumFilter, {
    nullable: true
  })
  _min?: NestedEnumBookStateEnumFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBookStateEnumFilter, {
    nullable: true
  })
  _max?: NestedEnumBookStateEnumFilter | undefined;
}

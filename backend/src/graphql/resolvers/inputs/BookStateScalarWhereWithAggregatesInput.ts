import * as TypeGraphQL from "type-graphql";
import { EnumBookStateEnumWithAggregatesFilter } from "./EnumBookStateEnumWithAggregatesFilter";
import { StringWithAggregatesFilter } from "./StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookStateScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class BookStateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookStateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookStateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookStateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookStateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookStateScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookStateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => EnumBookStateEnumWithAggregatesFilter, {
    nullable: true
  })
  name?: EnumBookStateEnumWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;
}

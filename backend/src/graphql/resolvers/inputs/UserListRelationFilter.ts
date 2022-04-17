import * as TypeGraphQL from "type-graphql";
import { UserWhereInput } from "./UserWhereInput";

@TypeGraphQL.InputType("UserListRelationFilter", {
  isAbstract: true
})
export class UserListRelationFilter {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  every?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  some?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  none?: UserWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.InputType("EnumBookStateEnumFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumBookStateEnumFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: true
  })
  set?: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD" | undefined;
}

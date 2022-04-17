import * as TypeGraphQL from "type-graphql";
import { EnumBookStateEnumFieldUpdateOperationsInput } from "./EnumBookStateEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookStateUpdateManyMutationInput", {
  isAbstract: true
})
export class BookStateUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => EnumBookStateEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumBookStateEnumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;
}

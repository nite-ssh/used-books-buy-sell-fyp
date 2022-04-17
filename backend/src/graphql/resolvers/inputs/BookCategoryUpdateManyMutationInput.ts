import * as TypeGraphQL from "type-graphql";
import { EnumBookCategoryEnumFieldUpdateOperationsInput } from "./EnumBookCategoryEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookCategoryUpdateManyMutationInput", {
  isAbstract: true
})
export class BookCategoryUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => EnumBookCategoryEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumBookCategoryEnumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;
}

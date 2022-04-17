import * as TypeGraphQL from "type-graphql";
import { BookUpdateManyWithoutBookStateInput } from "./BookUpdateManyWithoutBookStateInput";
import { EnumBookStateEnumFieldUpdateOperationsInput } from "./EnumBookStateEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookStateUpdateWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookStateUpdateWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => EnumBookStateEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumBookStateEnumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateManyWithoutBookStateInput, {
    nullable: true
  })
  books?: BookUpdateManyWithoutBookStateInput | undefined;
}

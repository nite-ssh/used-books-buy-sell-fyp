import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateManyWithoutBookStateInput } from "./BookUnverifiedUpdateManyWithoutBookStateInput";
import { EnumBookStateEnumFieldUpdateOperationsInput } from "./EnumBookStateEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookStateUpdateWithoutBooksInput", {
  isAbstract: true
})
export class BookStateUpdateWithoutBooksInput {
  @TypeGraphQL.Field(_type => EnumBookStateEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumBookStateEnumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateManyWithoutBookStateInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedUpdateManyWithoutBookStateInput | undefined;
}

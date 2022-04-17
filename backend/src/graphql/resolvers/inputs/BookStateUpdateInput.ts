import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateManyWithoutBookStateInput } from "./BookUnverifiedUpdateManyWithoutBookStateInput";
import { BookUpdateManyWithoutBookStateInput } from "./BookUpdateManyWithoutBookStateInput";
import { EnumBookStateEnumFieldUpdateOperationsInput } from "./EnumBookStateEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookStateUpdateInput", {
  isAbstract: true
})
export class BookStateUpdateInput {
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

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateManyWithoutBookStateInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedUpdateManyWithoutBookStateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import { BookUpdateManyWithoutBookCategoryInput } from "./BookUpdateManyWithoutBookCategoryInput";
import { EnumBookCategoryEnumFieldUpdateOperationsInput } from "./EnumBookCategoryEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookCategoryUpdateWithoutBookUnverifiedInput", {
  isAbstract: true
})
export class BookCategoryUpdateWithoutBookUnverifiedInput {
  @TypeGraphQL.Field(_type => EnumBookCategoryEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumBookCategoryEnumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateManyWithoutBookCategoryInput, {
    nullable: true
  })
  books?: BookUpdateManyWithoutBookCategoryInput | undefined;
}

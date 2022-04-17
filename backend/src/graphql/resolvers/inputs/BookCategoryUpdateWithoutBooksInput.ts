import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateManyWithoutBookCategoryInput } from "./BookUnverifiedUpdateManyWithoutBookCategoryInput";
import { EnumBookCategoryEnumFieldUpdateOperationsInput } from "./EnumBookCategoryEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookCategoryUpdateWithoutBooksInput", {
  isAbstract: true
})
export class BookCategoryUpdateWithoutBooksInput {
  @TypeGraphQL.Field(_type => EnumBookCategoryEnumFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: EnumBookCategoryEnumFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateManyWithoutBookCategoryInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedUpdateManyWithoutBookCategoryInput | undefined;
}

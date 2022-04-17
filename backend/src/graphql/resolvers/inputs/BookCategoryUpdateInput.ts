import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateManyWithoutBookCategoryInput } from "./BookUnverifiedUpdateManyWithoutBookCategoryInput";
import { BookUpdateManyWithoutBookCategoryInput } from "./BookUpdateManyWithoutBookCategoryInput";
import { EnumBookCategoryEnumFieldUpdateOperationsInput } from "./EnumBookCategoryEnumFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "./StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookCategoryUpdateInput", {
  isAbstract: true
})
export class BookCategoryUpdateInput {
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

  @TypeGraphQL.Field(_type => BookUnverifiedUpdateManyWithoutBookCategoryInput, {
    nullable: true
  })
  BookUnverified?: BookUnverifiedUpdateManyWithoutBookCategoryInput | undefined;
}

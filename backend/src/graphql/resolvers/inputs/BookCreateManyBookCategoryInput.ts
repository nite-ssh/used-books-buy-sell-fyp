import * as TypeGraphQL from "type-graphql";
import { BookStateEnum } from "../../enums/BookStateEnum";

@TypeGraphQL.InputType("BookCreateManyBookCategoryInput", {
  isAbstract: true
})
export class BookCreateManyBookCategoryInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bookPhoto?: string | undefined;

  @TypeGraphQL.Field(_type => BookStateEnum, {
    nullable: false
  })
  bookStateName!: "SOLD" | "DONATED" | "TO_BE_DONATED" | "TO_BE_SOLD";
}

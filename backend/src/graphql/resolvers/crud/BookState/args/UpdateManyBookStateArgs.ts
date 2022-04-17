import * as TypeGraphQL from "type-graphql";
import { BookStateUpdateManyMutationInput } from "../../../inputs/BookStateUpdateManyMutationInput";
import { BookStateWhereInput } from "../../../inputs/BookStateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookStateArgs {
  @TypeGraphQL.Field(_type => BookStateUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookStateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookStateWhereInput, {
    nullable: true
  })
  where?: BookStateWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import { BookUnverifiedUpdateManyMutationInput } from "../../../inputs/BookUnverifiedUpdateManyMutationInput";
import { BookUnverifiedWhereInput } from "../../../inputs/BookUnverifiedWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookUnverifiedArgs {
  @TypeGraphQL.Field(_type => BookUnverifiedUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookUnverifiedUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookUnverifiedWhereInput, {
    nullable: true
  })
  where?: BookUnverifiedWhereInput | undefined;
}

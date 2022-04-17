import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyInput } from "../../../inputs/TransactionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTransactionArgs {
  @TypeGraphQL.Field(_type => [TransactionCreateManyInput], {
    nullable: false
  })
  data!: TransactionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

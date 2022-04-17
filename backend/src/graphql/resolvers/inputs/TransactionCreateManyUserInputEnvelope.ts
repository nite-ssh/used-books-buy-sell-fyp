import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyUserInput } from "./TransactionCreateManyUserInput";

@TypeGraphQL.InputType("TransactionCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class TransactionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TransactionCreateManyUserInput], {
    nullable: false
  })
  data!: TransactionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

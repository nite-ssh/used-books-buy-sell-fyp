import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyBookUnverifiedInput } from "./TransactionCreateManyBookUnverifiedInput";

@TypeGraphQL.InputType("TransactionCreateManyBookUnverifiedInputEnvelope", {
  isAbstract: true
})
export class TransactionCreateManyBookUnverifiedInputEnvelope {
  @TypeGraphQL.Field(_type => [TransactionCreateManyBookUnverifiedInput], {
    nullable: false
  })
  data!: TransactionCreateManyBookUnverifiedInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

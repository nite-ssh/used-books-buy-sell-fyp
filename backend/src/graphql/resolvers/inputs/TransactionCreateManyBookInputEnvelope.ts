import * as TypeGraphQL from "type-graphql";
import { TransactionCreateManyBookInput } from "./TransactionCreateManyBookInput";

@TypeGraphQL.InputType("TransactionCreateManyBookInputEnvelope", {
  isAbstract: true
})
export class TransactionCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(_type => [TransactionCreateManyBookInput], {
    nullable: false
  })
  data!: TransactionCreateManyBookInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

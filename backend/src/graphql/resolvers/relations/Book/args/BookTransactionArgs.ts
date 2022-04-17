import * as TypeGraphQL from "type-graphql";
import { TransactionOrderByWithRelationInput } from "../../../inputs/TransactionOrderByWithRelationInput";
import { TransactionWhereInput } from "../../../inputs/TransactionWhereInput";
import { TransactionWhereUniqueInput } from "../../../inputs/TransactionWhereUniqueInput";
import { TransactionScalarFieldEnum } from "../../../../enums/TransactionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class BookTransactionArgs {
  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  where?: TransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TransactionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TransactionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: true
  })
  cursor?: TransactionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "address" | "deliveryState" | "userId" | "bookId" | "bookUnverifiedId"> | undefined;
}

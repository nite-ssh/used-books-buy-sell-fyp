import * as TypeGraphQL from "type-graphql";
import { Book } from "./Book";
import { BookUnverified } from "./BookUnverified";
import { Transaction } from "./Transaction";
import { UserRole } from "./UserRole";
import { UserRoleEnum } from "../enums/UserRoleEnum";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  books?: Book[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  profilePictureUrl!: string;

  @TypeGraphQL.Field(_type => UserRoleEnum, {
    nullable: false
  })
  userRoleName!: "USER" | "ADMIN";

  userRole?: UserRole;

  transaction?: Transaction[];

  BookUnverified?: BookUnverified[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}

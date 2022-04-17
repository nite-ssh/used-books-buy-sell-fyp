import * as TypeGraphQL from 'type-graphql';
import { User } from './User';

@TypeGraphQL.ObjectType('UserWithToken', {
  isAbstract: true,
})
export class UserWithToken extends User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  token!: string;
}

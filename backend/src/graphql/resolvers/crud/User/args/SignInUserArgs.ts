import * as TypeGraphQL from 'type-graphql';
import { SignInUserInput } from '../../../inputs/SignInUserInput';

@TypeGraphQL.ArgsType()
export class SignInUserArgs {
  @TypeGraphQL.Field(_type => SignInUserInput, {
    nullable: false,
  })
  data!: SignInUserInput;
}

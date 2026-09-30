import { InputType, Int, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreateUserInput {
  @PrimaryGeneratedColumn()
  userId: number;

  @Field()
  username: string;

  @Field()
  password: string;
}

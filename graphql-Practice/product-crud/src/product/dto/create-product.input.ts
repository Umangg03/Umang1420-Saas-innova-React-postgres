import { InputType, Int, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreateProductInput {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  productId: number;

  @Field()
  productName: string;

  @Field()
  isBooked: boolean;
}

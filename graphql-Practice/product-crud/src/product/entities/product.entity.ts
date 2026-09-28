import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  
  @Field(() => Int)
  productId: number;

  @Field()
  productName: String;
 
  @Field()
  isBooked: Boolean;
}

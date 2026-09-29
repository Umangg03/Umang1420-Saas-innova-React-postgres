import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {

  @PrimaryGeneratedColumn()
  @Field(() => Int,{ nullable: true })
  productId: number;

  @Column()
  @Field()
  productName: string;
 
  @Column({ default: false })
  @Field()
  isBooked: boolean;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {

  @PrimaryGeneratedColumn()
  @Field(() => Int,{ nullable: true })
  productId: number;

  @Column()
  @Field()
  productName: string;
  
  @Column()
  @Field()
  stock: number;
 
  @Column({ default: false })
  @Field()
  status: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
   @Field(() => Date)
  createdAt: Date;


  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
   @Field(() => Date)
  updatedAt: Date;
}


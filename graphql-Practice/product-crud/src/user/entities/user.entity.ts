import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn,Column } from 'typeorm';

@Entity()
@ObjectType()
export class Users {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: true })
  userId: number;

  @Column()
  @Field()
  username: String;

  @Column()
  @Field()
  password : string;

  @Column()
  @Field()
  email: String;

  @Column()
  @Field()
  role: String;
}

import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module.js';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity.js';
import { join } from 'path';
import { UserModule } from './user/user.module.js';
import { Users } from './user/entities/user.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'Umang#2005',
      database: 'graph',
      entities: [ Product , Users],
      autoLoadEntities: true,
      synchronize: true
    }),
    ProductModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      playground: true,
      autoSchemaFile: join(process.cwd(),'src/schema.graphql'), 

      definitions : { 
        path : join(process.cwd(),'src/graphql.ts')
      }
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

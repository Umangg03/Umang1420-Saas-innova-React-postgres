import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module.js';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity.js';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'Umang#2005',
      database: 'graph',
      entities: [ Product ],
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
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

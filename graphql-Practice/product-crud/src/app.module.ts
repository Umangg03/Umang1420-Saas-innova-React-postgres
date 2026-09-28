import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductModule } from './product/product.module.js';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [ProductModule,GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    graphiql: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

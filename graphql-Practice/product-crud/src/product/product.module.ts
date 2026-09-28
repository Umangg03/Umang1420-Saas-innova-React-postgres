import { Module } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { ProductResolver } from './product.resolver.js';
import { Product } from './entities/product.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}

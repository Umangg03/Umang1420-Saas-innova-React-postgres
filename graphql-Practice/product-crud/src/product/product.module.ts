import { Module } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { ProductResolver } from './product.resolver.js';

@Module({
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}

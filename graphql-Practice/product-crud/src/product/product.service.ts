import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductInput } from './dto/create-product.input.js';
import { UpdateProductInput } from './dto/update-product.input.js';
import { Product } from './entities/product.entity.js';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {
  constructor(
   @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  async create(createProductInput: CreateProductInput) {
    const product = this.productsRepository.create(createProductInput);
    await this.productsRepository.save(product);
    return `New Product has been Added`
  }

  async findAll() {
    return await this.productsRepository.find({
      order: {
        productId: 'asc',
      },
    });
  }

  async findOne(id: number) {
  const product = await this.productsRepository.findOne({ where: { productId: id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    const product = await this.findOne(id);
    Object.assign(product, updateProductInput);
    await this.productsRepository.save(product);
    return `Product ${id} has been Updated!`
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productsRepository.remove(product);
    return `Product ${id} has been Deleted!`
  }
}

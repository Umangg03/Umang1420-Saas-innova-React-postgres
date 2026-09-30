
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateProductInput {
    productName: string;
    isBooked: boolean;
}

export interface UpdateProductInput {
    productName?: Nullable<string>;
    isBooked?: Nullable<boolean>;
    productId: number;
}

export interface Product {
    productId?: Nullable<number>;
    productName: string;
    isBooked: boolean;
}

export interface IQuery {
    products(): Product[] | Promise<Product[]>;
    product(id: number): Product | Promise<Product>;
}

export interface IMutation {
    createProduct(createProductInput: CreateProductInput): string | Promise<string>;
    updateProduct(updateProductInput: UpdateProductInput): string | Promise<string>;
    removeProduct(id: number): string | Promise<string>;
}

type Nullable<T> = T | null;

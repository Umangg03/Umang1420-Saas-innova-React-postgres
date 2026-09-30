
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateProductInput {
    productId: number;
    productName: string;
    isBooked: boolean;
}

export interface UpdateProductInput {
    productId: number;
    productName?: Nullable<string>;
    isBooked?: Nullable<boolean>;
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
    createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;
    updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;
    removeProduct(id: number): Product | Promise<Product>;
}

type Nullable<T> = T | null;

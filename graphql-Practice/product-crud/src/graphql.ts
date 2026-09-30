
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

export interface CreateUserInput {
    username: string;
    password: string;
}

export interface UpdateUserInput {
    username?: Nullable<string>;
    password?: Nullable<string>;
    id: number;
}

export interface Product {
    productId?: Nullable<number>;
    productName: string;
    isBooked: boolean;
}

export interface Users {
    userId?: Nullable<number>;
    username: string;
    password: string;
}

export interface IQuery {
    products(): Product[] | Promise<Product[]>;
    product(id: number): Product | Promise<Product>;
    users(): Users[] | Promise<Users[]>;
    user(id: number): Users | Promise<Users>;
}

export interface IMutation {
    createProduct(createProductInput: CreateProductInput): string | Promise<string>;
    updateProduct(updateProductInput: UpdateProductInput): string | Promise<string>;
    removeProduct(id: number): string | Promise<string>;
    createUser(createUserInput: CreateUserInput): string | Promise<string>;
    updateUser(updateUserInput: UpdateUserInput): string | Promise<string>;
    removeUser(id: number): string | Promise<string>;
}

type Nullable<T> = T | null;


/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateProductInput {
    productName: string;
    stock: number;
    status: boolean;
}

export interface UpdateProductInput {
    productName?: Nullable<string>;
    stock?: Nullable<number>;
    status?: Nullable<boolean>;
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
    stock: number;
    status: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export interface Users {
    userId?: Nullable<number>;
    username: string;
    password: string;
    email: string;
    role: string;
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

export type DateTime = any;
type Nullable<T> = T | null;

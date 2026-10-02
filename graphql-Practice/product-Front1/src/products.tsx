//@ts-expect-error
import './App.css'
import { useState, useEffect } from 'react'

interface Product {
    productId: number;
  productName: string;
  stock: number;
  status: boolean;
}

const productsQuery = `
    query Products {
        products {
            productId
            productName
            stock
            status
        }
    }
`;

const Products = () => {
        const [productsList, setProductsList] = useState<Product[]>([])
        const [error, setError] = useState('')

        useEffect(() => {
        fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: productsQuery }),
        })
            .then(async (response) => {
                const result = await response.json()
                if (!response.ok || result.errors) {
                    throw new Error(result.errors?.[0]?.message ?? 'Could not load products')
                }
                return result.data.products as Product[]
            })
            .then(setProductsList)
            .catch((err: Error) => setError(err.message))
  }, []);

  return (
    <>
    <div className="product-page">
        <div className="hero">
            <div className="intro-text">
                <p>CATALOG / INVENTORY</p><br/>
                <h1>Your Products</h1>
                <p>A thoughtful view of everything you make and move.</p>
            </div>
            <div className="add-product">
                <button><i className="fa-solid fa-plus"></i> Add Product</button>
            </div>
        </div>
        <div className="product-data">
            <div className="product-values">
                <p>CATALOG VALUE</p><br/>
                <h3>$ 11,848.00</h3><p>Earned</p>
            </div>
            <div className="product-quantity">
                <p>TOTAL ITEMS</p><br/>
                <h3>06</h3><p>Items</p>
            </div>
            <div className="product-units">
                <p>UNITS IN STOCK</p><br/>
                <h3>84</h3><p>Units</p>
            </div>
            <div className="product-orders">
                <p>PRODUCT ORDERS</p><br/>
                <h3>111</h3><p>orders</p>
            </div>
        </div>
        <div className="table-data">
        <table>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
                {error ? (
                    <tr><td colSpan={3}>{error}</td></tr>
                ) : productsList.length === 0 ? (
                    <tr><td colSpan={3}>No products found</td></tr>
                ) : productsList.map((product) => (
                    <tr key={product.productId}>
                        <td>{product.productName}</td>
                        <td>{product.stock}</td>
                        <td>{product.status ? 'Out of stock' : 'In stock'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default Products

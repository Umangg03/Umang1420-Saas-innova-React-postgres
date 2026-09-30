import './App.css'
const products = () => {
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
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>Moniter</td>
                <td>299</td>
                <td>Booked</td>
            </tr>
        </table>
        </div>
    </div>
    </>
  )
}

export default products

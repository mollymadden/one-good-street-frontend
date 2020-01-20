import React, { Component } from 'react';
import './ProductList.css';

class ProductList extends React.Component {
    state = {
        data: null
    }

    async componentDidMount() {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/product")
        const data = await response.json()
        this.setState({
            data: data
        })
        console.log(data)
    }

    // Key might get rid of console errors

    render() {
        console.log(process.env.REACT_APP_BACKEND_URL)
        const { data } = this.state
        return (
            <div className="pageContainer">
                <h1>Products 👻</h1>
                {data ? data.map((product, index) => {
                    return (
                        <div className="another">
                            <div className="productContainer">
                                <div className="productItem" key={index}>
                                    <h3>{product.name}</h3>
                                    <img src={product.imageUrl}></img>
                                    <p>{product.description}</p>
                                    <p>SKU: {product.sku} <h3>${product.price}</h3></p>
                                </div>
                            </div>
                        </div>
                    )
                }) : null}
            </div>
        )
    }
}

export default ProductList;
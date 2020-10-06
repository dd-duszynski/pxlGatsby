import React, { Component } from 'react'
import Layout from "../../components/Layout/Layout"
import ProductsNav from "../../components/Products/ProductsNav/ProductsNav"
export class products extends Component {
    render() {
        return (
            <Layout language="DE">
               <ProductsNav language="DE"/>
                products DE
            </Layout>
        )
    }
}

export default products

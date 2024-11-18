import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductItem from '../containers/ProductItem'
import ProductList from '../containers/ProductList'

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<ProductItem />} />
            <Route path="/product_item" element={<ProductItem />} />
            <Route path="/product_list" element={<ProductList />} />
        </Routes>
    )
}

export default Routing

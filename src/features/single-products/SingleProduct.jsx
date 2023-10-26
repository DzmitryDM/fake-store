import React from 'react'

import ProductsList from '../products/ProductsList'
import SingleProductList from './SingleProductList'

function SingleProduct() {
	return (
		<>
			<SingleProductList />
			<ProductsList />
		</>
	)
}

export default SingleProduct

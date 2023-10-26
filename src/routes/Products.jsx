import React from 'react'
import styles from './../styles/Products.module.css'
import ProductsByCategories from '../features/categories/ProductsByCategories'
import SingleProduct from '../features/products/SingleProduct'


function Products() {


	return (
		<div className={styles.products_container}>
			<SingleProduct  />
			<ProductsByCategories />
		</div>
	)
}

export default Products

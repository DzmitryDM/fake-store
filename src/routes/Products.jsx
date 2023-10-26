import React from 'react'
import styles from './../styles/Products.module.css'
import ProductsByCategories from '../features/categories/ProductsByCategories'


function Products() {


	return (
		<div className={styles.products_container}>
			<ProductsByCategories />
		</div>
	)
}

export default Products

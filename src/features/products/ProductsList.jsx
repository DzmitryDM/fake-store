import React from 'react'
import { useProducts } from './useProducts'
import ProductsItem from './ProductsItem'
import styles from './../../styles/Products.module.css'


function ProductsList() {
	const [products, { status, error }] = useProducts()
	return (
		<>
			{error  && <div>{error}</div>}
			{status === 'received' && (
				<section className={styles.related_products}>
					{products.map(products => (
						<ProductsItem key={products.id} {...products} />
					))}
				</section>
			)}
		</>
	)
}

export default ProductsList
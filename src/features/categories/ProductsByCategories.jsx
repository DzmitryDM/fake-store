import React from 'react'
import ProductsItem from '../products/ProductsItem'
import styles from './../../styles/Products.module.css'
import { useProductsCategories } from './use-products-categories'

function ProductsByCategories() {
const [products, { status, error }] = useProductsCategories()

  return (
		<div>
			{error && <div>{error}</div>}
			{status === 'received' && (
				<div className={styles.product_card}>
					{products.map(p => (
						<ProductsItem key={p.id} {...p} />
					))}
				</div>
			)}
		</div>
	)
}

export default ProductsByCategories
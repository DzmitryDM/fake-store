import React from 'react'
import styles from './../../styles/Products.module.css'

function ProductsButton({price}) {
  return (
		<div price={price} className={styles.card_bottom}>
			<div className={styles.card_price}>{price} $</div>
			<button className={styles.card_button}>Buy</button>
		</div>
	)
}

export default ProductsButton
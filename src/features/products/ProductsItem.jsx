import React from 'react'
import styles from './../../styles/Products.module.css'
import ProductsButton from './ProductsButton'
import computer from './../../icons/computer.png'
import { useNavigate} from 'react-router-dom'


function ProductsItem({id, images, title, category, price }) {
	
	const navigate = useNavigate()



const handleProduct = ()=>{
	navigate(`/products/:idCategory/singleProduct/${id}`)
}
	return (
		<article onClick={handleProduct}>
			<img
				className={styles.card_image}
				src={images[0] ? images[0] : computer}
				alt='images'
			/>
			<div className={styles.card}>
				<div className={styles.card_title}>{title}</div>
				<div>{category.name}</div>
				<ProductsButton price={price} />
			</div>
		</article>
	)
}

export default ProductsItem

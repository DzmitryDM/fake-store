import React from 'react'
import { useSingleProducts } from './useSingleProducts'
import styles from './../../styles/Products.module.css'

function SingleProductList() {
	const [images, { status, product, error }] =
		useSingleProducts()
	


	return (
		<>
			{status === 'received' && (
				<section className={styles.single_products}>
					<div className={styles.single_wrapper_img}>
						<img
							className={styles.single_image}
							src={images[0]}
							alt='imag'
						/>
						{/* <div style={{ backgroundImage: `url(${currimages})`}}> </div> */}
						<div className={styles.single_images}>
							{images.map((image, i) => (
								<img
									key={i}
									src={image}
									alt='imag'
								/>
							))}
						</div>
					</div>
				</section>
			)}
		</>
	)
}

export default SingleProductList

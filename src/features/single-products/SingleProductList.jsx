import React, { useState } from 'react'
import { useSingleProducts } from './useSingleProducts'
import styles from './../../styles/Products.module.css'

function SingleProductList() {
	const [images, { status, product, error }] =
		useSingleProducts()
	
		const [currentImage, setCurrentImage] = useState(null)




	return (
		<>
			{status === 'received' && (
				<section className={styles.single_products}>
					<div className={styles.single_wrapper_img}>
						<img className={styles.single_image} src={currentImage === null ? images[0]:currentImage} alt='imag' />
						{/* <div style={{ backgroundImage: `url(${currimages})`}}> </div> */}
						<div className={styles.single_images}>	
							{images.map((image, i) => (
								<img
									key={i}
									src={image}
									alt='imag'
									onClick={() => setCurrentImage(image)}
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

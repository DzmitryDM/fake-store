import React from 'react'
import Box from './../../icons/Box.png'
import computer from './../../icons/computer.png'
import styles from './../../styles/Main.module.css'

function Banner() {
	return (
		<div className={styles.home}>
			<img className={styles.main_images} src={Box} alt='img1' />
			<div className={styles.images}>
				<img className={styles.images2} src={computer} alt='img2' />
			</div>
		</div>
	)
}

export default Banner

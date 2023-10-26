import React from 'react'
import { useCategoriesAll } from './use-categories'
import Sidebar from './Sidebar'
import styles from './../../styles/Main.module.css'

function SideBarList() {
	const categories = useCategoriesAll()
	
	return (
		<aside className={styles.sidebar}>
			{ categories.map(categories => (
				<Sidebar key={categories.id} {...categories} />
			))}
		</aside>
	)
}

export default SideBarList

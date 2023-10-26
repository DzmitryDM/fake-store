import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './../../styles/global.module.css'
import styles from './../../styles/Main.module.css'
import SideBarList from '../../features/categories/SideBarList'



function Main() {
	return (
		<main>
			<div className={style.container}>
				<div className={styles.grid_wraper}>
					<SideBarList />
					<Outlet />
				</div>
			</div>
		</main>
	)
}

export default Main

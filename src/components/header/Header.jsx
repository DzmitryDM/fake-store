import React from 'react'
import styles from './../../styles/Header.module.css'
import logo from './../../icons/logo.svg'
import { Link } from 'react-router-dom'
import style from './../../styles/global.module.css'
import ThemeSwitcher from './ThemeSwitcher'
import Search from './Search'
import Profile from './Profile'
import Cart from './Cart'

function Header() {
	return (
		<header>
			<div className={style.container}>
				<div className={styles.flex_header}>
					<div className={styles.logo}>
						<Link to={`/`}>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<Search />
					<Profile />
					<Cart />
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	)
}

export default Header

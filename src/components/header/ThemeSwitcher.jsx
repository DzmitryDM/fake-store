import React, { useEffect, useState } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import styles from './../../styles/Header.module.css'

function ThemeSwitcher() {
	const [theme, setTheme] = useState('dark')

	const handleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}
	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<div onClick={handleTheme} className={styles.theme}>
			{theme === 'dark' ? (
				<IoMoon size='27px' />
        ) : (
          <IoMoonOutline size='27px' />
			)}
		</div>
	)
}

export default ThemeSwitcher

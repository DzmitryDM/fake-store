import React from 'react'
import styles from './../../styles/Header.module.css'
import {BsSearch} from 'react-icons/bs'

function Search() {
  return (
		<div className={styles.input_wrapper}>
			<BsSearch className={styles.search} />
			<input className={styles.input} type='text' />
		</div>
	)
}

export default Search
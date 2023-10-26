import React from 'react'
import styles from './../../styles/Header.module.css'
import {FaCartShopping} from 'react-icons/fa6'

function Cart() {
  return (
		<div className={styles.cart}>
			<FaCartShopping size='27px'/>
		</div>
	)
}

export default Cart
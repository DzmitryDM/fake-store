import React, { useEffect } from 'react'
import styles from './../../styles/Products.module.css'
import { loadCurrentProduct } from './products-slice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'



function SingleProduct() {
const dispatch = useDispatch()
  const { idProduct } = useParams()
  useEffect(()=>{
dispatch(loadCurrentProduct(idProduct))
  },[idProduct])

const { title } = useSelector(state => state.products.product)
	return <div className={styles.single_products}>{title}RENDER</div>
}

export default SingleProduct
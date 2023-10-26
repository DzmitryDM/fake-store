import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadProducts,
	selectProducts,
	selectStatusProducts,
} from './../../features/products/products-slice'

export const useProducts = () => {
	const dispatch = useDispatch()
	const products = useSelector(selectProducts)
	const { status, error, quantity } = useSelector(selectStatusProducts)

	useEffect(() => {
		if (!quantity) {
			dispatch(loadProducts())
		}
	}, [quantity, dispatch])
	

  return [products,{status,error}]
}

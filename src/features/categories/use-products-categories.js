import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
	loadProductsByCategories,
	selectCategories,
	selectStatusProductsByCategories,
} from './categories-slice'

export const useProductsCategories =()=>{
    const { idCategory } = useParams()
		const { productsByCategories } = useSelector(selectCategories)
const { status, error } = useSelector(
	selectStatusProductsByCategories
)

		const dispatch = useDispatch()
		useEffect(() => {
			dispatch(loadProductsByCategories(idCategory))
			}, [idCategory,dispatch])

return [productsByCategories, { status, error }]
}
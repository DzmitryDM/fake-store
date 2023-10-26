import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllCategories, selectCategories } from './categories-slice'

export const useCategoriesAll = () => {
	const dispatch = useDispatch()
	const { categoriesAll } = useSelector(selectCategories)

	useEffect(() => {
			dispatch(loadAllCategories())
	}, [])

	return categoriesAll
}

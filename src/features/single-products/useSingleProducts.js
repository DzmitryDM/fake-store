import { useDispatch, useSelector } from "react-redux"
import { loadCurrentProduct, selectSingleProducts } from "./single-products-slice"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const useSingleProducts= ()=>{
  const { status, product,error } = useSelector(selectSingleProducts)
  const dispatch = useDispatch()
  const { idProduct } = useParams()

useEffect(() => {
	dispatch(loadCurrentProduct(idProduct))
}, [idProduct,dispatch])

// const [currentImage, setCurrentImage] = useState()

 const { images } = product
// console.log(product);
// useEffect(()=>{
// setCurrentImage(images[0])
// },[images])

return [images,{ status, product, error }]

}
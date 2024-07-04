import { useParams } from "react-router-dom"
import ProdDetails from "../components/prodinfo/ProdDetails"
import ProdSlider from "../components/prodinfo/ProdSlider"
import Prodsimilar from "../components/prodinfo/Prodsimilar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProductsThunk } from "../store/slices/products.slice"
import './styles/prodInfo.css'

const ProdInfor = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const products = useSelector(store => store.products)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  const product = products?.filter(prod => prod.id === +id)[0]

  return ( 
    <div className="prodinfo">
      <ProdSlider 
        product={product}
      />
      <ProdDetails 
        product={product}
      />
      <Prodsimilar 
        product={product}
      />
    </div>
  )
}

export default ProdInfor
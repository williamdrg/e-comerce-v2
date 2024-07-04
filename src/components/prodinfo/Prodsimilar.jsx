import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import ProdCard from "../homePage/ProdCard"
import './styles/prodSimilar.css'

const Prodsimilar = ({product}) => {

  const [ items, getItems ] = useFetch()
  
  useEffect(() => {
    const path = `/products?categoryId=${product.categoryId}`
    getItems(path)
  }, [])
  
  const cbFilter = (prod) => {
    return prod.id !== product.id
  }

  return (
    <div className="prodsimilar">
      <h2 className="prodsimilar_title">Discover similar items</h2>
      <div className="homepage_container">
        {
          items?.filter(cbFilter).map((prod) => (
            <ProdCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Prodsimilar
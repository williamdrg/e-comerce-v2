import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPurchasesThunk } from "../store/slices/purchases.slice"


const Purchases = () => {

  const purchaseSlice = useSelector(store => store.purchaseSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPurchasesThunk())
  }, [])

  return (
    <div>Purchases</div>
  )
}

export default Purchases
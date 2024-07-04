import { useDispatch } from "react-redux"
import { postProductsThunk, updateProductThunk } from "../../store/slices/cart.slice"
import './styles/prodDetails.css'
import { useState } from "react";

const ProdDetails = ({product}) => {

  const [quantity, setQuantity] = useState(1); // Estado local para manejar la cantidad
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(postProductsThunk({
      'quantity': quantity, 
      'productId': product.id
    }));
  }

  const handleLess = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handlePlus = () => {
    setQuantity(quantity + 1);
  }

console.log(product)
  return (
    <div className="prod-details">
      <p className="brand">{product.brand}</p>
      <h2 className="title">{product.title}</h2>
      <p className="description">{product.description}</p>
      <ul className="prodcard_list">
        <li className="prodcard_item">
          <span>Price</span>
          <span>$ {product.price}</span>
        </li>
        <li className="prodcard_item">
          <span>Quantity</span>
          <div className="itemcart_buttons">
            <button onClick={handleLess}>-</button>
            <span>{quantity}</span>
            <button onClick={handlePlus}>+</button>
          </div>
        </li>
      </ul>
      <button onClick={handleAddCart} className="add-to-cart">Add to cart</button>
    </div>
  );
}

export default ProdDetails
import React from "react";
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART} from '../../utils/actions';

const CartCard = ({ img, name, price, description, product, _id }) => {
  const [, dispatch] = useStoreContext();

  const removeItem = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
  idbPromise('cart', 'delete', { ...item });
};


  return (
    <div className="cartCard">
      <div className=" nameAndPrice">
        <img src={img} alt={name}/>
        <div className="column content">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </div>

      <p>{description}</p>
      <i className="fa-sharp fa-solid fa-trash" onClick={() => removeItem(product)}></i>

    </div>
  );
};
export default CartCard;
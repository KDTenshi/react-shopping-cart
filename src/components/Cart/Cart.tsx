import { FC } from "react";
import style from "./Cart.module.css";
import { useAppDispatch, useAppSelector } from "../../app/store/appStore";
import { CartItem, decreaseAmount, hideCart, increaseAmount, removeFromCart } from "../../shared/model/cartSLice";

const CartItemCard: FC<{ item: CartItem }> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={style.Item}>
      <button className={style.Item_Remove} onClick={() => dispatch(removeFromCart(item.id))}>
        Delete
      </button>
      <h3 className={style.Item_Title}>{item.title}</h3>
      <p className={style.Item_Price}>${item.price}</p>
      <div className={style.Item_Buttons}>
        <button className={style.Item_Button} onClick={() => dispatch(decreaseAmount(item.id))}>
          -
        </button>
        <p className={style.Item_Amount}>{item.amount}</p>
        <button className={style.Item_Button} onClick={() => dispatch(increaseAmount(item.id))}>
          +
        </button>
      </div>
    </div>
  );
};

const Cart: FC = () => {
  const isShown = useAppSelector((state) => state.cart.isShown);
  const items = useAppSelector((state) => state.cart.items);
  const cartPrice = useAppSelector((state) => state.cart.items.reduce((sum, item) => (sum += item.totalPrice), 0));

  const dispatch = useAppDispatch();

  return (
    <>
      {isShown && (
        <div className={style.Wrapper}>
          <div className={style.Cart}>
            <button className={style.Button} onClick={() => dispatch(hideCart())}>
              X
            </button>
            <h2 className={style.Title}>Shopping cart</h2>
            <div className={style.Content}>
              {items.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
            <div className={style.Bottom}>
              <p>Total: ${cartPrice}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

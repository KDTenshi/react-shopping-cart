import { FC } from "react";
import style from "./Cart.module.css";

const Cart: FC = () => {
  return (
    <div className={style.Wrapper}>
      <div className={style.Cart}>
        <h2 className={style.Title}>Shopping cart</h2>
        <div className={style.Content}>
          <div className={style.Item}>
            <h3 className={style.Item_Title}>Item Title</h3>
            <p className={style.Item_Price}>Item Price</p>
            <div className={style.Item_Buttons}>
              <button className={style.Item_Button}>-</button>
              <p className={style.Item_Amount}>2</p>
              <button className={style.Item_Button}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

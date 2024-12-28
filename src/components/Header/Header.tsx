import { FC } from "react";
import style from "./Header.module.css";
import { useAppDispatch } from "../../app/store/appStore";
import { showCart } from "../../shared/model/cartSLice";

const Header: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={style.Header}>
      <h1 className={style.Title}>Cart App</h1>
      <div className={style.Buttons}>
        <button className={style.Button} onClick={() => dispatch(showCart())}>
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;

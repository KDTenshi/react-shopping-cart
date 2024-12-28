import { FC } from "react";
import style from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <h1 className={style.Title}>Cart App</h1>
      <div className={style.Buttons}>
        <button className={style.Button}>Cart</button>
      </div>
    </header>
  );
};

export default Header;

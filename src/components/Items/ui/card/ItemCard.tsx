import { FC } from "react";
import style from "./ItemCard.module.css";
import { Item } from "../../../../shared/types/types";
import { useAppDispatch } from "../../../../app/store/appStore";
import { addToCart } from "../../../../shared/model/cartSLice";

interface ItemCardProps {
  item: Item;
}

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.ItemCard}>
      <h2 className={style.Title}>{item.title}</h2>
      <p className={style.Price}>${item.price}</p>
      <button className={style.Button} onClick={() => dispatch(addToCart(item))}>
        To cart
      </button>
    </div>
  );
};

export default ItemCard;

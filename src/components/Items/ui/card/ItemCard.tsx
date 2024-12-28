import { FC } from "react";
import style from "./ItemCard.module.css";
import { Item } from "../../../../shared/types/types";

interface ItemCardProps {
  item: Item;
}

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  return (
    <div className={style.ItemCard}>
      <h2 className={style.Title}>{item.title}</h2>
      <p className={style.Price}>${item.price}</p>
      <button className={style.Button}>To cart</button>
    </div>
  );
};

export default ItemCard;

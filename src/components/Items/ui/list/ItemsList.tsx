import { FC } from "react";
import style from "./ItemsList.module.css";
import { useAppSelector } from "../../../../app/store/appStore";
import ItemCard from "../card/ItemCard";

const ItemsList: FC = () => {
  const items = useAppSelector((state) => state.items);

  return (
    <div className={style.ItemsList}>
      {items.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemsList;

"use client";

import { useParams } from "next/navigation";
import { items, Item } from "../../../data";

const ItemDetail = () => {
  const { id } = useParams();
  const itemId = id ? parseInt(id) : NaN;

  // Find the item with the given `id`
  const item: Item | undefined = items.find((item) => item.id === itemId);

  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "300px", height: "auto" }}
      />
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;

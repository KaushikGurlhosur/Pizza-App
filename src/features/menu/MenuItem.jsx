/* eslint-disable react/prop-types */
// import { useState } from "react";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  // const [data, setData] = useState({});
  // console.log(pizza);
  // const newOrder = {
  //   ...data,
  // };
  // console.log(newOrder);

  return (
    <li className="flex gap-4 py-2 ">
      <img
        src={imageUrl}
        alt={name}
        // height={200}
        // width={200}
        className={`h-24 w-24 rounded-xl ${soldOut ? "opacity-80 grayscale" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

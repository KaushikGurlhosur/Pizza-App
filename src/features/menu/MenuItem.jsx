/* eslint-disable react/prop-types */
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const unitPriceUpdate = unitPrice * 20;
  // const [data, setData] = useState({});
  // console.log(pizza);
  // const newOrder = {
  //   ...data,
  // };
  // console.log(newOrder);

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPriceUpdate * 1,
    };
    dispatch(addItem(newItem));
    // console.log(newItem);
  }

  return (
    <li className="flex gap-4 py-2 hover:scale-90 duration-300  ">
      <img
        src={imageUrl}
        alt={name}
        // height={200}
        // width={200}
        className={`h-24 w-24 hover:scale-125 duration-300  rounded-xl ${soldOut ? "opacity-80 grayscale" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPriceUpdate)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <DeleteItem pizzaId={id} />
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

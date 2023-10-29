import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { CDN_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/appStore/cartSlice";
import { Link } from "react-router-dom";

// Video completed 1:46 hours done

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-8 p-6">
      <h1 className="text-xl font-bold">Cart</h1>
      {cartItems.length > 0 && (
        <button
          onClick={handleClear}
          className="bg-[#000] text-white p-2 m-2 rounded-lg"
        >
          Clear Cart
        </button>
      )}
      <div className="w-6/12 m-auto">
        <ul>
          {cartItems.length > 0 ? (
            cartItems?.map((item, index) => {
              return (
                <li
                  key={item?.card?.info?.id}
                  className={`p-2 m-2 border-lighgray border-b-2 flex justify-between items-center`}
                >
                  <div className="w-9/12 mr-8">
                    <div className="text-sm font-medium flex flex-col p-2">
                      <span>{item?.card?.info?.name}</span>
                      <span>
                        ₹{" "}
                        {item?.card?.info?.price
                          ? item?.card?.info?.price / 100
                          : item?.card?.info?.defaultPrice / 100}
                      </span>
                    </div>
                    <div className="text-xs opacity-0.2">
                      {item?.card?.info?.description}
                    </div>
                  </div>
                  <div className="w-3/12 h-40 flex flex-col justify-end relative mb-4">
                    <img
                      className="w-[150px] h-[100px] object-cover"
                      src={CDN_URL + item?.card?.info?.imageId}
                      alt="Image"
                    />
                  </div>
                </li>
              );
            })
          ) : (
            <div className="mt-2">
              <h1 className="text-lg font-mono font-bold">
                Please Add Product In Cart, Your Cart is emplty
              </h1>
              <Link
                to={"/"}
                className="bg-[#000] text-white p-2 m-2 rounded-lg mt-2 block"
              >
                Add To Items
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Cart;

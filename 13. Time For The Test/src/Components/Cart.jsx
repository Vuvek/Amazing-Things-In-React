import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { CDN_URL } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/appStore/cartSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Video completed 1:46 hours done

function Cart() {
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const handleClear = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    let sub = 0;
    cartItems.map((item) => {
      console.log(item, "item");
      sub += item.card.info.price / 100;
    });
    setSubTotal(sub);
  }, []);

  const handleOpenRazorPay = (data) => {
    const options = {
      key: "rzp_test_4SJJhiIyzLnaMp",
      amount: +data.amount,
      curreny: data.curreny,
      name: "SHOPPING APP",
      description: "Test Transaction",
      order_id: data.id,
      handler: function (response) {
        fetch("http://localhost:3001/verify", {
          method: "POST",
          timeout: 0,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ response }),
        }).then((res) => {
          res.json().then((data) => {
            console.log(data, "jalksfdjlksadjflksa");
            naviagte("/thankyou");
          });
        });
        console.log(response, "39");
      },
    };
    var rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleCheckout = (total) => {
    fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ amount: total }),
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data, " ");
          handleOpenRazorPay(data?.data);
        });
      })
      .catch((err) => console.log(err, "Error is Occured"));
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
      <div className="flex w-12/12 gap-36">
        <div className="w-7/12">
          <ul>
            {cartItems.length > 0 ? (
              cartItems?.map((item, index) => {
                return (
                  <li
                    data-testid="cartItem"
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
        {cartItems.length > 0 && (
          <div className="absolute w-4/12 top-48 right-5">
            <div className="gap-4 border-2 border-gray-300 mb-3">
              <h3 className="text-left bg-slate-200 font-bold text-lg p-2">
                Cart Summary
              </h3>
              <p className="font-medium text-lg text-left p-2">Product Price</p>
              <div className="flex justify-between p-2">
                <h3 className="text-lef text-lg p-2">SubTotal</h3>
                <h3 className="text-lef text-lg p-2">
                  {" "}
                  ₹ {subTotal.toFixed(2)}
                </h3>
              </div>
              <div className="flex justify-between p-2">
                <h3 className="text-lef text-lg p-2">Shipping</h3>
                <h3 className="text-lef text-lg p-2">₹ {285}</h3>
              </div>
              <div className="flex justify-between font-bold p-2">
                <h3 className="text-lef text-lg p-2">Total</h3>
                <h3 className="text-lef text-lg p-2">
                  ₹ {(subTotal + 285).toFixed(2)}
                </h3>
              </div>
            </div>
            <button
              onClick={() => handleCheckout((subTotal + 285).toFixed(2))}
              className="bg-yellow-500 w-full p-2 font-bold"
            >
              Check Out Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

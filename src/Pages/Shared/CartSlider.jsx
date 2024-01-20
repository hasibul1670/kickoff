/* eslint-disable react/prop-types */

import {
  AiFillDelete,
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusSquare,
} from "react-icons/ai";

import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const CartSlider = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const { book, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const cartData = book;

  const totalQuantity = () => {
    let totalQuantity = 0;
    cartData.forEach((book) => {
      totalQuantity += book.quantity;
    });

    return totalQuantity;
  };

  const handleRemoveBookFromCart = (book) => {
    dispatch(removeFromCart(book));
    toast.success("Book Delete From Cart!!");
  };

  return (
    <div className="p-2 shadow-xl">
      <button onClick={handleClose} className="text-xl btn-outline">
        <AiOutlineClose />
      </button>
      <h2 className="text-red-500 text-sm">Total Items: {totalQuantity()}</h2>
      <div className=" mt-4 gap-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-cyan-700">
            Total: {total?.toFixed(2)}
          </h1>
          <Link
            onClick={handleClose}
            to="/place-order"
            className="font-bold text-white btn  btn-sm btn-neutral capitalize "
          >
            Place Order
          </Link>
        </div>

        {cartData &&
          cartData?.map((cart) => (
            <div key={cart._id} className="border-b-2 border-sky-500 p-5">
              <div className="border-r pr-20 shrink-0">
                <img src={cart?.url} alt="" className="h-full" />
              </div>
              <p className="text-cyan-700 font-bold "> {cart?.name}</p>
              <p className=" font-bold text-xs">
                {" "}
                price: {(cart.price * cart.quantity).toFixed(2)}$
              </p>
              <p>Quantity: {cart.quantity}</p>
              <button
                onClick={() => dispatch(addToCart(cart))}
                className="text-2xl btn-outline mr-5"
              >
                <AiOutlinePlusSquare />
              </button>

              <button
                onClick={() => dispatch(removeOne(cart))}
                className="text-2xl btn-outline ml-5"
              >
                <AiOutlineMinusCircle />
              </button>

              <button
                onClick={() => handleRemoveBookFromCart(cart)}
                className="text-2xl btn-outline ml-10"
              >
                <AiFillDelete />
              </button>
            </div>
          ))}

        <p className="text-xl font-bold text-blue-600"></p>
      </div>
    </div>
  );
};

export default CartSlider;

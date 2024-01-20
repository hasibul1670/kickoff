/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";
import defaultImage from "../../assets/coursephoto/p1.jpg";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hook";
const HomePageCard = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = async (course) => {
    dispatch(addToCart(course));
    toast.success("Product Added to Cart Successfully!");
  };

  return (
    <div className="card w-52 h-72 p-1 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl">
      <figure className=" pt-2">
        <img
          alt="example"
          src={product?.url || defaultImage}
          height={200}
          width={200}
        />
      </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="font-bold text-cyan-700 ">{product?.name}</h6>

        <p className="text-bold text-cyan-400">Brand:{product?.company}</p>

        <h6 className="font-bold  ">{product?.price}</h6>
        <button
          onClick={() => handleAddToCart(product)}
          className="btn capitalize btn-primary btn-sm mx-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default HomePageCard;

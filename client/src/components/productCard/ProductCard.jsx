import { assets } from "../../assets/assets";
import { useAppContext } from "../customHook/useAppContext";

export const PrdoductCard = ({ product }) => {
  const { navigate, addToCart, removeFromCart, cartItems } = useAppContext();

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-40 max-w-56 w-full"
    >
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product?.image[0]}
          alt={product?.name}
        />
      </div>
      <div className="text-gray-500/60 text-sm">
        <p>{product?.category}</p>
        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {product?.name}
        </p>
        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <img
                key={i}
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt="stat-icon"
                className="md:w-3.5 w-3"
              />
            ))}
          <p>(4)</p>
        </div>
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-primary">
            ${product?.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              ${product?.price}
            </span>
          </p>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="text-primary-500"
          >
            {!cartItems[product._id] ? (
              <button
                className="flex items-center justify-center gap-1 bg-primary/10 border border-primary md:w-20 w-16 h-8.5 rounded text-primary font-medium"
                onClick={() => addToCart(product._id)}
              >
                <img src={assets.cart_icon} alt="cart-icon" />
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-8.5 bg-primary rounded select-none">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="cursor-pointer text-md px-2 h-full  text-white"
                >
                  -
                </button>
                <span className="w-5 text-center text-white">
                  {cartItems[product._id]}
                </span>
                <button
                  onClick={() => {
                    addToCart(product._id);
                  }}
                  className="cursor-pointer text-md px-2 h-full  text-white"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

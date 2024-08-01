import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { formatWithCommas } from "@/utils/functions";
import { makeToast } from "@/utils/helper";
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";

interface propsType {
    id: string;
    img: string;
    category: string;
    title: string;
    price: number;
  }

const ProductCard = ({id, img, category, title, price}: propsType) => {
    const dispatch = useAppDispatch();

    const addProductToCart = () => {
        const payLoad = {
            id,
            img,
            title,
            price,
            quantity: 1,
        }
        dispatch(addToCart(payLoad));
        makeToast("Added to Cart");
    }
  return (
    <div className="border border-gray-200">
        <div className="text-center border-b border-gray-200">
            <img className="inline-block" src={img} alt={title} />
        </div>

        <div className="px-4 py-4">
          <p className="text-gray-500 text-[14px] font-medium">{category}</p>
          <h2 className="font-medium">{title}</h2>
          <div className="mt-3 flex text-[#ffb21d] items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className="text-gray-600 text-[14px] ml-2">(13 Reviews)</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <h2 className="font-medium text-accent text-[16px]">NGN{" "}{formatWithCommas(price)}</h2>
            <div className="flex gap-2 items-center bg-[#c77848] text-white px-4 py-2 cursor-pointer hover:bg-[#0c0a08]" 
               onClick={addProductToCart}>
              <AiOutlineShoppingCart /> <span className="text-sm">Add to Cart</span>  
            </div>
          </div>

        </div>
    </div>
  )
}

export default ProductCard
import priceFormatters from "@/app/utils/priceFormatters";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";

export const CartList = [
  { name: "SportsOn HyperSoccer v2",
    category: "Football",
    imgUrl: "product-4.png",
    qty : 1,
    price: 790000
    },
    { name: "SportsOn HyperSwimming v2",
    category: "Swimming",
    imgUrl: "product-5.png",
    qty : 5,
    price: 890000 
    },
    { name: "SportsOn HyperBasketball v2",
    category: "Basketball",
    imgUrl: "product-6.png",
    qty : 3,
    price: 990000
    },
    { name: "SportOn Product 4",
    category: "Basketball",
    imgUrl: "product-3.png",
    qty : 2,
    price: 690000   
    },
]

const totalPrice = CartList.reduce((total, item) => total + (item.price * item.qty), 0);

const CartPopup = () => {
     const {push} = useRouter();

     const handleCheckout = () => {
        push("/checkout")
     }

    return (
        <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
            <div className="p-4 border-b border[#E4E4E4D1] font-bold text-center">
                Shoping Cart
            </div>
            {
                CartList.map((cartItem, index) => (
                    <div className="border-b border-gray-200 p-4 flex gap-3 ">
                        <div className="bg-[#F6F6F6] aspect-square w-16 flex justify-center item-center">
                            <img src={`/images/products/${cartItem.imgUrl}`} 
                            width={63} 
                            height={63}
                            alt={cartItem.name}
                            className="aspect-square object-contain" />  
                        </div>
                        <div className="self-center">
                            <div className="text-sm font-medium">{cartItem.name}</div>
                            <div className="flex gap-3 font-medium text-xs">
                                <div>{cartItem.qty}x</div>
                                <div className="text-[#FF5F3F] ">{priceFormatters(cartItem.price)}</div>
                            </div>
                        </div>
                        <button className="w-7 h-7 p-0! self-center ml-auto">
                            <FiTrash2/>
                        </button>
                    </div>
                ))}
                <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between font-semibold">
                        <div className=" text-sm">Total</div>
                        <div className="text-[#FF5F3F] text-xs">{priceFormatters(totalPrice)}</div>
                    </div>
                </div>
                <button className="bg-black text-white w-full py-2 rounded-md flex justify-center gap-2 items-center font-medium" 
                onClick={handleCheckout}>
                    Checkout Now
                    <FiArrowRight />
                </button>
        </div>
    )
}

export default CartPopup;
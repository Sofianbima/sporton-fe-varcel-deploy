"use client"

import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { CartList } from "../ui/cart-poup";
import priceFormatters from "@/app/utils/priceFormatters";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";

const CartItem = () => {
 const {push} = useRouter();
    const totalPrice = CartList.reduce((total, item) => total + (item.price * item.qty), 0);

    const payment = () => {

    }

    return (
        <CardWithHeader title="Cart Items">
            <div className="p-4">
                <div className="overflow-auto max-h-[300px]">
                    {CartList.map((cartItem, index) => (
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
                        </div>))}
                </div>
                
                <div className="border-t border-gray-200 p-4 mt-4 mb-0">
                    <div className="flex justify-between font-semibold mb-4">
                        <div className=" text-sm">Total</div>
                        <div className="text-[#FF5F3F] text-xs ">
                            {priceFormatters(totalPrice)}
                        </div>
                    </div>
                </div>
                <button className="bg-black text-white w-full py-4 flex justify-center items-center gap-2 font-medium" onClick={() => push("/payment")}>
                    <FiCreditCard size={16}/>
                    Proceed to Payment
                </button>
            </div>
        </CardWithHeader>
    )
}

export default CartItem;
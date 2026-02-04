
"use client";

import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = () => {
    const reloadOrderStatus = () => {
        window.location.reload()
    }

    return (
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center text-center mx-auto">
            <img src="/images/item-subbmitted.png" width={117} height={117} alt="Order Submitted" />
            <h2 className="text-2xl font-semibold mb-2 ">Order Submitted!!</h2>
            <p className="mb-6">Your Order is recorded in our system, 
                we are still confirming the payment status, 
                please wait and your order status will 
                be updated in less than 12 hours.
            </p>
            <button className="bg-[#000000] text-white w-full py-3 flex items-center justify-center gap-2 " onClick={reloadOrderStatus}>
                <FiRefreshCw/>
                Refresh Order Status
                </button>
        </div>
    )
}

export default OrderSubmitted;
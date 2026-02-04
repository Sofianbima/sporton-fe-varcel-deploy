const OrderConfirmed = () => {
     return (
            <div className="bg-white w-160 p-16 flex flex-col justify-center items-center text-center mx-auto">
                <img src="/images/icon-order-confirmed.svg" width={117} height={117} alt="Order Submitted" />
                <h2 className="text-2xl font-semibold mb-2 ">Order Confirmed!!</h2>
                <p className="mb-6">YWe have received your payment, 
                    and your order is currently processed by our staff,
                     just wait until your favorite sportswear arrive in your home. 
                     We will contact you in Whatsapp for further shipping updates.
                </p>
            </div>
        )
}

export default OrderConfirmed
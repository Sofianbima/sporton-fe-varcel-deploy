import CartItem from "../components/checkout/cart-item";
import OrderInformation from "../components/checkout/order-information";

const Checkout  = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-15">
                <h1 className="text-5xl font-bold text-center mb-10">Checkout Now</h1>
                <div className="grid grid-cols-2 gap-14">
                    <OrderInformation />
                    <CartItem />
                </div>
            </div>
            
        </main>
    )
}

export default Checkout;
import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
    return (
        <CardWithHeader title="Order Information">
            <div className="p-4">
                <div className="flex flex-col gap-4">
                    <div className="input-group">
                        <label htmlFor="full-name" className="block mb-2">Full Name</label>
                        <input type="text" placeholder="Type your full name" id="full-name" name="full-name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="whatsapp-number" className="block mb-2">WhatsApp Number</label>
                        <input type="text" placeholder="Type your WhatsApp number" id="whatsapp-number" name="whatsapp-number"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="shipping-address" className="block mb-2">Shipping Address</label>
                        <textarea placeholder="Type your shipping address"
                        id="shipping-address"
                        name="shipping-address"
                        rows={7}/>
                    </div>
                </div>
            </div>
        </CardWithHeader>
    )
}

export default OrderInformation;
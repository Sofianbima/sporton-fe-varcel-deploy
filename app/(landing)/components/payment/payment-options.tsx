import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const paymentList = [
    {
        name_Bank: "BCA",
        account_Number: "1234567890",
        account_Holder: "PT sporton indonesia",
    },
     {
        name_Bank: "Mandiri",
        account_Number: "0987654321",
        account_Holder: "PT sporton indonesia",
    },
     {
        name_Bank: "BNI",
        account_Number: "1122334455",
        account_Holder: "PT sporton indonesia",
    },
];

const PaymentOptions = () => {
    return (
       <CardWithHeader title="Payment Options"> 
       {
        paymentList.map((payment, index) => (
            <div className="flex gap-5 p-5 border-b border-gray-100" key={index}>
                <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                    <FiCreditCard size={24}/>
                </div>
                <div className="self-center">
                <div className="font-bold">{payment.name_Bank}</div>
                <div className="text-sm">{payment.account_Number}</div>
                <div className="text-sm opacity-70">{payment.account_Holder}</div>
                </div>
                <div className="ml-auto bg-blue-50 text-grey-800 text-xs h-fit self-center px-2 py-1">
                    Bank Transfer
                </div>
            </div>
        ))}
       </CardWithHeader>
    )
}

export default PaymentOptions;
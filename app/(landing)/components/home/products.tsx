import priceFormatters from "@/app/utils/priceFormatters";
import { FiPlus } from "react-icons/fi";

const ProductsList = [
  { name: "SportOn Product 1",
    category: "Running",
    imgUrl: "product-1.png",
    price: 490000
    },
    { name: "SportOn Product 2",
    category: "Tennis",
    imgUrl: "product-2.png",
    price: 590000
    },
    { name: "SportOn Product 3",
    category: "Basketball",
    imgUrl: "product-3.png",
    price: 690000   
    },
    { name: "SportOn Product 4",
    category: "Badminton",
    imgUrl: "product-4.png",
    price: 790000
    },
    { name: "SportOn Product 5",
    category: "Football",
    imgUrl: "product-5.png",
    price: 890000 
    },
    { name: "SportOn Product 6",
    category: "Swimming",
    imgUrl: "product-6.png",
    price: 990000
    }
];

const productsSection = () => {

    return <section id="products-section" className="container mx-auto mt-32 mb-52">
        <h2 className="font-bold italic text-4xl text-center mb-16">
            <span className="text-[#FF5F3F]">OUR</span> PRODUCTS
        </h2>
        <div className="grid grid-cols-4 gap-5 mt-5">
            {ProductsList.map((product, index) => (
            <a href= {`/products/${product.name}`} 
            key={index} 
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                <div className="bg-[#F4EBEB] aspect-square w-full flex justify-center items-center relative">
                    <img 
                    src={`/images/products/${product.imgUrl}`}
                    alt={product.name}
                    width={150} 
                    height={150}
                    className="aspect-square object-contain"/>
                    <button className="w-10 h-10 p-2! bg-[#FF5F3F] absolute right-3 top-3">
                        <FiPlus size={24}  />
                        </button>
                </div>
                <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                <div className="flex justify-between items-center mb-8">
                    <div className="text-gray-500">{product.name}</div>
                    <div className="font-medium text-[#FF5F3F]">{
                        priceFormatters(product.price)}</div>
                </div>
            </a>
        ))}
        </div>
    </section>;
}

export default productsSection;
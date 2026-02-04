"use client"

import Image from "next/image"
import { FiSearch, FiShoppingBag } from "react-icons/fi"
import CartPopup from "../ui/cart-poup"
import { use, useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isCartpopupopen, setisCartPopupOpen] = useState (false);

    return (
        <header className="flex justify-between gap-10 container mx-auto py-7">
            <Link href={"/"}>
              <img 
            src="/images/logo-header.svg"
            width={187} 
            height={84} 
            alt="logo sporton"/>
            </Link>

            <nav className="flex gap-44">
                <ul className="flex gap-24 font-medium text-dark">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Category</a></li>
                  <li><a href="#">Explore Products</a></li>
                </ul>
            </nav>
            <button className="relative flex gap-5 cursor-pointer" onClick={() => setisCartPopupOpen(!isCartpopupopen)}>
                <FiSearch className="size-5"/>
                <div className="relative">
                    <FiShoppingBag className="size-5"/>
                    <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1"/>
                </div>
                {isCartpopupopen && <CartPopup />}
            </button>
        </header>
    )
}

export default Header
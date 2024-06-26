import Logo from "@/components/logo";
import Link from "next/link";
import React from "react";
import { FaCartShopping, FaUserGear } from "react-icons/fa6";
import CartBadge from "./cartBadge";
import Navbar from "./navbar";
import getAllCategory from "@/api/getAllCategory";
import { ICategory } from "@/types/getAllCategoryRes";

const Header = async () => {
  const cat = await getAllCategory();
  return (
    <header className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="grid w-full grid-cols-2 items-center  py-2">
          <div className="flex items-center ">
            <Link href={"/"}>
              <div className="flex items-center">
                <Logo />
                <div className="mr-2">
                  <p className="text-3xl font-semibold md:text-4xl">اسپادز</p>
                  <p className="hidden pt-2 text-sm sm:block md:text-base">
                    فروشگاه آنلاین ساعت
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-end gap-x-1">
            <Link
              href={"/cart"}
              className="relative flex items-center gap-x-2 rounded-3xl bg-black px-4 py-2 text-sm font-medium text-white"
            >
              <FaCartShopping />
              <span className="hidden sm:block">سبد خرید</span>
              <CartBadge />
            </Link>
            <Link
              className="flex items-center gap-x-2 rounded-3xl bg-black px-4 py-2 text-sm font-medium text-white"
              href={"/login"}
            >
              <FaUserGear />
              <span className="hidden sm:block">پنل مدیریت</span>
            </Link>
          </div>
        </div>
      </div>
      <Navbar data={cat} />
    </header>
  );
};

export default Header;

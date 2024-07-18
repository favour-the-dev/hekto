import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";         
import { CiPhone } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
function Banner() {
    return ( 
        <>
            <div className="bg-violet text-white flex-center flex-col w-full p-3 overflow-hidden">
                <div className="max-w-[60rem] mx-auto flex-between gap-8 w-full">
                    <div className="flex items-start md:items-center flex-col md:flex-row md:gap-4 md:w-1/2">
                        <span className="flex-center gap-2"><MdOutlineMailOutline /> mhhasanul@gmail.com</span>
                        <span className="flex-center gap-2"><CiPhone /> 07010752695</span>
                    </div>
                    <div className="hidden md:flex md:items-center md:gap-4 cursor-pointer">
                        <span className="flex-center gap-2"> English <IoIosArrowDown /></span>
                        <span className="flex-center gap-2">USD <IoIosArrowDown /></span>
                        <Link href='' className="flex-center gap-2">Login <CgProfile /></Link>
                        <Link href='' className="flex-center gap-2">wishlist <CiHeart /></Link>
                    </div>
                    <Link href='' className="text-xl hidden md:block"><IoCartOutline /></Link>
                </div>
            </div>
        </>
    );
}

export default Banner;
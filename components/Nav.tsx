"use client"
import { Josefin_Sans } from "next/font/google";
import Banner from "@components/Banner";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
    const jsans = Josefin_Sans({
        subsets: ["latin"]
    })

    function Nav() {
        const pathname = usePathname();
        const [isNavCLicked, setIsNavClicked] = useState<boolean>(false);
        return ( 
            <>
                <Banner/>
                <nav className="bg-white text-text p-3 relative">
                    <div className="w-full max-w-[60rem] mx-auto flex-between">
                        <div className={`text-2xl md:text-3xl md:mr-16 font-bold ${jsans.className}`}>
                            Hekto
                        </div>
                        {/* dewktop nav */}
                        <div className=" hidden md:flex-between gap-4 w-full">
                            <div className="flex items-center gap-4 text-sm">
                                <Link href='/' className={pathname ===  "/" ? "text-accent" : "hover:text-accent"}>Home</Link>
                                <Link href='/pages' className="hover:text-accent">Pages</Link>
                                <Link href='' className="hover:text-accent">Products</Link>
                                <Link href='' className="hover:text-accent">Blog</Link>
                                <Link href='' className="hover:text-accent">Shop</Link>
                                <Link href='' className="hover:text-accent">Contact</Link>
                            </div>
                            <div>
                                <label htmlFor="" className="flex-center">
                                    <input type="text" className="border border-gray-300 p-1 placeholder:text-sm" placeholder="Search For Products"/>
                                    <button className="w-fit bg-accent text-white text-lg p-2"><CiSearch /></button>
                                </label>
                            </div>
                        </div>
                        {/* mobile nav */}
                        <div className="md:hidden">
                            <div className="text-3xl" onClick={(event: any)=>{
                                setIsNavClicked((prevState: boolean)=> !prevState)
                                }}>
                                {
                                    isNavCLicked ? 
                                    <div className="z-20 relative text-accent"><IoMdClose/></div> :
                                    <div><RxHamburgerMenu/></div>
                                }
                            </div>
                            {
                                isNavCLicked && (
                                    <div onClick={(event: any)=>{
                                        setIsNavClicked(false)
                                        }} 
                                        className={`flex flex-col items-start gap-4 text-sm bg-white w-full p-3 absolute ease-in-out duration-300 z-10 top-0 ${!isNavCLicked ? 'right-[-100%]' : 'right-0'}`}>
                                        <Link href='/' className={pathname ===  "/" ? "text-accent" : "hover:text-accent"}>Home</Link>
                                        <Link href='' className="hover:text-accent">Pages</Link>
                                        <Link href='' className="hover:text-accent">Products</Link>
                                        <Link href='' className="hover:text-accent">Blog</Link>
                                        <Link href='' className="hover:text-accent">Shop</Link>
                                        <Link href='' className="hover:text-accent">Contact</Link>
                                        <span className="flex-center gap-2"><IoIosArrowDown />English</span>
                                        <span className="flex-center gap-2"><IoIosArrowDown />USD</span>
                                        <Link href='' className="flex-center gap-2"><CgProfile />Login</Link>
                                        <Link href='' className="flex-center gap-2"> <CiHeart />wishlist</Link>
                                        <Link href='' className="flex-center gap-2"><IoCartOutline />Cart</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </nav>
            </>
        );
    }
    
    export default Nav;
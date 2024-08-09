"use client"
import { Josefin_Sans } from "next/font/google";
import Banner from "@components/Banner";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSession } from "next-auth/react";
    const jsans = Josefin_Sans({
        subsets: ["latin"]
    })

    function Nav() {
        const pathname = usePathname();
        const [openLanguageSelect, setOpenLanguageSelect] = useState<boolean>(false);
        const [language, setLanguage] = useState<string | null>('English');
        const handleLanguageChange = (event: MouseEvent)=>{
            const element = event.target as HTMLElement;
            setLanguage(element.textContent)
        }
        const [openCurrencySelcect, setOpenCurrencySelect] = useState<boolean>(false);
        const [currency, setCurrency] = useState<string | null>('USD');
        const handleCurrencyChange = (event: MouseEvent)=>{
            const element = event.target as HTMLElement;
            setCurrency(element.textContent)
        }
        const [isNavCLicked, setIsNavClicked] = useState<boolean>(false);
        const handleNavClicked = (e: any)=>{
            const element = e.target as HTMLElement;
            const parentDiv = element.parentElement as HTMLElement || null;
            if(parentDiv.id === "lang" || parentDiv.id === "currency"){
                return
            }else {
                setTimeout(() =>{
                    setIsNavClicked(false);
                }, 600)
            }
        }
        const { status, data } = useSession();
        const nameData = data?.user?.name as string;
        const imageData = data?.user?.image as string;
        const userName = nameData?.split(' ')[0]
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
                                    <motion.div 
                                    onClick={(event: any)=> {
                                        handleNavClicked(event)
                                    }}
                                    initial={{opacity: 0}}
                                    animate={isNavCLicked ? {opacity: 1} : {opacity: 0}}
                                    transition={{
                                        ease: "linear",
                                        duration: 0.5
                                    }}
                                        // ${!isNavCLicked ? 'right-[-100%]' : 'right-0'}
                                        className={`flex flex-col items-start gap-4 text-sm bg-white w-full p-3 absolute z-10 ${!isNavCLicked ? 'right-[-100%]' : 'right-0'}`}>
                                        <div className="w-full">
                                            <label htmlFor="" className="flex-start w-full">
                                                <input type="text" className="border border-gray-300 p-1 placeholder:text-sm w-3/4" placeholder="Search For Products"/>
                                                <button className="w-fit bg-accent text-white text-lg py-[6px] p-1"><CiSearch /></button>
                                            </label>
                                        </div>
                                        <Link href='/' className={pathname ===  "/" ? "text-accent" : "hover:text-accent"}>Home</Link>
                                        <Link href='' className="hover:text-accent">Pages</Link>
                                        <Link href='' className="hover:text-accent">Products</Link>
                                        <Link href='' className="hover:text-accent">Blog</Link>
                                        <Link href='' className="hover:text-accent">Shop</Link>
                                        <Link href='' className="hover:text-accent">Contact</Link>
                                        <div id="lang" className="relative" onClick={()=> setOpenLanguageSelect((prevState: boolean)=> !prevState)}>
                                            <span className="flex-center gap-2"><IoIosArrowDown />{language}</span>
                                            <motion.div
                                            initial={{opacity: 0, maxHeight: 0}}
                                            animate={openLanguageSelect ? {opacity: 1, maxHeight: 200} : {opacity: 0, maxHeight: 0}}
                                            transition={{
                                                ease: "linear",
                                                duration: 0.5
                                            }}
                                            onClick={(event: any)=>{handleLanguageChange(event)}}
                                            className={`bg-white rounded-sm w-full text-subText text-xs flex-center flex-col gap-2`}>
                                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">English</span>
                                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">Français</span>
                                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">Español</span>
                                                <span className="p-1 capitalize hover:text-accent">German</span>
                                            </motion.div>
                                        </div>
                                        <div
                                        id="currency"
                                        onClick={()=> setOpenCurrencySelect((prevState: boolean)=> !prevState)}
                                        className="relative p-1 w-fit">
                                            <span className="flex-center gap-2"><IoIosArrowDown />{currency}</span>
                                            <motion.div 
                                            initial={{opacity: 0, maxHeight: 0}}
                                            animate={openCurrencySelcect ? {opacity: 1, maxHeight: 200} : {opacity: 0, maxHeight: 0}}
                                            transition={{
                                                ease: "linear",
                                                duration: 0.5
                                            }}
                                            onClick={(event: any)=>{handleCurrencyChange(event)}} className="bg-white rounded-sm w-full text-subText text-xs flex-center flex-col gap-2 mt-1">
                                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">USD</span>
                                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">NGN</span>
                                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">EUR</span>
                                                <span className="p-1 capitalize hover:text-accent">GBP</span>
                                            </motion.div>
                                        </div>
                                        {status === "authenticated" ? <Link href='/profile' className="flex-center gap-2"><Image src={imageData} alt="" width={20} height={20} className="rounded-full"/>{userName}</Link> : 
                                        <Link href='/login' className="flex-center gap-2"><CgProfile />Login</Link>}
                                        <Link href='/wishlist' className="flex-center gap-2"> <CiHeart />wishlist</Link>
                                        <Link href='/cart' className="flex-center gap-2"><IoCartOutline />Cart</Link>
                                    </motion.div>
                                )
                            }
                        </div>
                    </div>
                </nav>
            </>
        );
    }
    
    export default Nav;
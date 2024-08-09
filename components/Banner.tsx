"use client"
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";         
import { CiPhone } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { useState, MouseEvent } from "react";
import { useSession } from "next-auth/react";
function Banner() {
    const [language, setLanguage] = useState<string | null>('English');
    const [currency, setCurrency] = useState<string | null>('USD');
    const handleCurrencyChange = (event: MouseEvent)=>{
        const element = event.target as HTMLElement;
        setCurrency(element.textContent)
    }
    const handleLanguageChange = (event: MouseEvent)=>{
        const element = event.target as HTMLElement;
        setLanguage(element.textContent)
    };
    const { status, data } = useSession();
    const nameData = data?.user?.name as string;
    const userName = nameData?.split(' ')[0]
    const imageData = data?.user?.image as string;
    return ( 
        <>
            <div className="bg-violet text-white flex-center flex-col w-full p-3">
                <div className="max-w-[60rem] mx-auto flex-between gap-8 w-full">
                    <div className="flex items-start md:items-center flex-col md:flex-row md:gap-4 md:w-1/2">
                        <span className="flex-center gap-2"><MdOutlineMailOutline /> mhhasanul@gmail.com</span>
                        <span className="flex-center gap-2"><CiPhone /> 07010752695</span>
                    </div>
                    <div className="hidden md:flex md:items-center md:gap-4 cursor-pointer">
                        <div className="group relative p-1 w-fit">
                            <span className="flex-center gap-2"> {language} <IoIosArrowDown /></span>
                            <div onClick={(event: any)=>{handleLanguageChange(event)}} className="bg-white rounded-sm w-full text-subText text-xs flex-center flex-col gap-2 absolute z-[20] mt-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">English</span>
                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">Français</span>
                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">Español</span>
                                <span className="p-1 capitalize hover:text-accent">German</span>
                            </div>
                        </div>
                        <div className="group relative p-1 w-fit">
                            <span className="flex-center gap-2">{currency} <IoIosArrowDown /></span>
                            <div onClick={(event: any)=>{handleCurrencyChange(event)}} className="bg-white rounded-sm w-full text-subText text-xs flex-center flex-col gap-2 absolute z-[20] mt-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">USD</span>
                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">NGN</span>
                                <span className="border-b border-text border-opacity-50 p-1 capitalize hover:text-accent">EUR</span>
                                <span className="p-1 capitalize hover:text-accent">GBP</span>
                            </div>
                        </div>
                        {status === 'authenticated' ? <div><Link href='/profile' className="flex-center gap-2"><Image src={imageData} alt="" width={20} height={20} className="rounded-full"/>{userName}</Link></div> : 
                        <Link href='/login' className="flex-center gap-2">Login <CgProfile /></Link>}
                        <Link href='/wishlist' className="flex-center gap-2">wishlist <CiHeart className="text-xl"/></Link>
                    </div>
                    <Link href='/cart' className="text-xl hidden md:block"><IoCartOutline /></Link>
                </div>
            </div>
        </>
    );
}

export default Banner;
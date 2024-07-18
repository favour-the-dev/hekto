"use client"
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
function Card({title, code, price, imageUrl}: {title:string, code:string, price:string, imageUrl: string} ){
    return(
        <>
            <div className="group flex flex-col items-center rounded-md w-full md:w-[250px] bg-[#F6F7FB] h-fit shadow-sm cursor-pointer">
                <div className="flex-center gap-2 my-2 self-start px-3 text-xl opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                    <span className="hover:bg-[#EEEFFB] text-blue p-1 rounded-full"><IoCartOutline/></span>
                    <span className="text-[#1DB4E7] hover:bg-[#EEEFFB] p-1 rounded-full"><CiHeart /></span>
                    <span className="text-[#1DB4E7] hover:bg-[#EEEFFB] p-1 rounded-full text-sm"><FaSearchPlus/></span>
                </div>
                <div className="">
                    <Image 
                    src={imageUrl} 
                    alt="image"
                    width={200}
                    height={200}
                    className="w-[150px] h-[100px] md:h-[150px]"
                    />
                </div>
                <button className="bg-bright_green capitalize text-white text-sm w-fit rounded-sm p-2 mb-2 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">view details</button>
                <div className={`bg-white w-full flex-center flex-col gap-3 border border-gray-100 rounded-md p-2 group-hover:bg-blue ease-in-out duration-300`}>
                    <h3 className="text-accent group-hover:text-white text-center">{title}</h3>
                    <span className="flex items-center gap-2">
                        <span className="bg-bright_green w-2 h-2 px-2 rounded-md"></span>
                        <span className="bg-accent w-2 h-2 px-2 rounded-md"></span>
                        <span className="bg-blue w-2 h-2 px-2 rounded-md group-hover:bg-white"></span>
                    </span>
                    <span className="text-text text-xs group-hover:text-white">Code. {code}</span>
                    <span className="text-text text-xs group-hover:text-white">${price}</span>
                </div>
            </div>
        </>
    )
}

export default Card;
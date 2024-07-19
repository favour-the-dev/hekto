"use client"
import { Josefin_Sans } from "next/font/google";
import { useState } from "react";
import image1 from "@public/assets/images/wooden.svg";
import Image from "next/image";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
const Discount = () => {
    const [tab, setTab] = useState<number>(1);
    const handleTabChange = (index: number) => {
        setTab(index);
    }
    return (
        <>
            <section className="w-full p-5 my-6">
                <div className="w-full max-w-[60rem] mx-auto">
                    <h2 className={`${j_sans.className} font-bold text-text text-2xl md:text-4xl text-center w-full mb-4`}>Discount Item</h2>
                    <div className="mb-4 cursor-pointer flex-center flex-wrap gap-6 md:gap-8 text-text font-semibold text-sm whitespace-nowrap">
                        <span onClick={()=>handleTabChange(1)} className={`${tab === 1 ? 'text-accent underline after:w-[2px] after:h-[2px] after:bg-accent after:p-1 after:absolute after:bottom-1 after:rounded-full after:right-[-15%]' : ''} relative duration-300 ease-in-out`}>Wood Chair</span>
                        <span onClick={()=>handleTabChange(2)} className={`${tab === 2 ? 'text-accent underline after:w-[2px] after:h-[2px] after:bg-accent after:p-1 after:absolute after:bottom-1 after:rounded-full after:right-[-15%]' : ''} relative duration-300 ease-in-out`}>Plastic Chair</span>
                        <span onClick={()=>handleTabChange(3)} className={`${tab === 3 ? 'text-accent underline after:w-[2px] after:h-[2px] after:bg-accent after:p-1 after:absolute after:bottom-1 after:rounded-full after:right-[-15%]' : ''} relative duration-300 ease-in-out`}>Sofa Collection</span>
                    </div>
                    <div className="flex-center lg:flex-between flex-col lg:flex-row gap-4">
                        <div className="flex-start flex-col gap-3 order-2 lg:order-1">
                            <h2 className={`${j_sans.className} text-3xl md:text-4xl font-bold text-text`}>20% Discount Of All Products</h2>
                            <h3 className="font-semibold text-accent">Eams Sofa Compact</h3>
                            <p className="text-subText text-xm">Wooden Ergonomic chair: Supportive design meets modern style. Work in comfort and boost productivity, for less.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-subText text-sm">
                                <span className="before:content-['✔'] before:mx-2 before:text-lg">Material expose like metals</span>
                                <span className="before:content-['✔'] before:mx-2 before:text-lg">Simple neutral colours.</span>
                                <span className="before:content-['✔'] before:mx-2 before:text-lg">Clear lines and geomatric figures</span>
                                <span className="before:content-['✔'] before:mx-2 before:text-lg">Material expose like metals</span>
                            </div>
                            <button className="btn-accent text-sm rounded-sm px-4 p-3">Shop Now</button>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Image
                            src={image1}
                            alt="chair"
                            width={800}
                            height={800}
                            className="w-[500px] lg:w-[800px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discount
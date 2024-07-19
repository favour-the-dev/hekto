"use client"
import { Josefin_Sans } from "next/font/google";
import { useState } from "react";
import image1 from "@public/assets/category/img-1.svg";
import image2 from "@public/assets/category/img-2.svg";
import image3 from "@public/assets/category/img-3.svg";
import image4 from "@public/assets/category/img-4.svg";
import CategoriesCard from "./_components/CategoriesCard";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
const Topcategories = () => {
    const [tab, setTab] = useState<number>(0);
    const handleTabChange = (index: number) => {
        setTab(index);
    }
    const categories = ['Living Room Essentials', 'Home Office Haven', 'Bedroom Bliss']
    return (
        <>
            <div className="w-full p-5 my-6">
                <div className="w-full max-w-[60rem] mx-auto">
                    <h2 className={`${j_sans.className} font-bold text-text text-2xl md:text-4xl text-center w-full mb-4`}>Top Categories</h2>
                    <p className="w-full text-center text-sm text-accent mb-4">{categories[tab]}</p>
                    <div className="flex-center flex-col gap-3">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 place-content-center">
                            <CategoriesCard
                            imageUrl={image1}
                            title="Mini LCW Chair"
                            price={56}
                            discountedPrice={0}
                            />
                            <CategoriesCard
                            imageUrl={image2}
                            title="Mini LCW Chair"
                            price={56}
                            discountedPrice={0}
                            />
                            <CategoriesCard
                            imageUrl={image3}
                            title="Mini LCW Chair"
                            price={56}
                            discountedPrice={0}
                            />
                            <CategoriesCard
                            imageUrl={image4}
                            title="Mini LCW Chair"
                            price={56}
                            discountedPrice={0}
                            />
                        </div>
                        <div className="w-full flex-center gap-2 my-6">
                            <button onClick={()=>{
                                handleTabChange(0)
                            }} className={`bg-accent w-[10px] h-[10px] rounded-full duration-300 ease-in-out ${tab === 0 ? 'bg-opacity-100' : 'bg-opacity-40'}`}></button>
                            <button onClick={()=>{
                                handleTabChange(1)
                            }} className={`bg-accent w-[10px] h-[10px] rounded-full duration-300 ease-in-out ${tab === 1 ? 'bg-opacity-100' : 'bg-opacity-40'}`}></button>
                            <button onClick={()=>{
                                handleTabChange(2)
                            }} className={`bg-accent w-[10px] h-[10px] rounded-full duration-300 ease-in-out ${tab === 2 ? 'bg-opacity-100' : 'bg-opacity-40'}`}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topcategories
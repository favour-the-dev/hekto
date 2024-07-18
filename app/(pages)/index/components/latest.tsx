"use client"
import { Josefin_Sans } from "next/font/google";
import { useState } from "react";
import ProductCard from "./_components/productCard";
import image1 from "@public/assets/latest/img-1.svg";
import image2 from "@public/assets/latest/img-2.svg";
import image3 from "@public/assets/latest/img-3.svg";
import image4 from "@public/assets/latest/img-4.svg";
import image5 from "@public/assets/latest/img-5.svg";
import image6 from "@public/assets/latest/img-6.svg";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
function Latest() {
    const [tab, setTab] = useState<number>(1);
    const handleTabChange = (index: number) => {
        setTab(index);
    }
    return ( 
        <>
            <section className="w-full p-6">
                <div className="w-full max-w-[60rem] mx-auto">
                    <h2 className={`${j_sans.className} font-bold text-text text-xl md:text-3xl text-center w-full mb-4`}>Latest Products</h2>
                    <div className=" cursor-pointer flex-center flex-wrap gap-2 md:gap-8 text-text font-semibold text-sm whitespace-nowrap">
                        <span onClick={()=>handleTabChange(1)} className={`${tab === 1 ? 'text-accent underline' : ''} duration-300 ease-in-out`}>New Arrival</span>
                        <span onClick={()=>handleTabChange(2)} className={`${tab === 2 ? 'text-accent underline' : ''} duration-300 ease-in-out`}>Best Seller</span>
                        <span onClick={()=>handleTabChange(3)} className={`${tab === 3 ? 'text-accent underline' : ''} duration-300 ease-in-out`}>Featured</span>
                        <span onClick={()=>handleTabChange(4)} className={`${tab === 4 ? 'text-accent underline' : ''} duration-300 ease-in-out`}>Special Offer</span>
                    </div>
                    <div className="mt-6 grid grid-cols-2 lg:flex lg:flex-center lg:flex-row lg:flex-between flex-wrap gap-4 md:gap-8 lg:gap-12">
                        <ProductCard
                            title='Comfort Handy Craft'
                            price='42.00'
                            discount='65.00'
                            imageUrl={image1}
                        />
                        <ProductCard
                            title='Comfort Handy Craft'
                            price='42.00'
                            discount='65.00'
                            imageUrl={image2}
                        />
                        <ProductCard
                            title='Comfort Handy Craft'
                            price='42.00'
                            discount='65.00'
                            imageUrl={image3}
                        />
                        <ProductCard
                            title='Comfort Handy Craft'
                            price='42.00'
                            discount='65.00'
                            imageUrl={image4}
                        />
                        <ProductCard
                            title='Comfort Handy Craft'
                            price='42.00'
                            discount='65.00'
                            imageUrl={image5}
                        />
                        <ProductCard
                            title='Comfort Handy Craft'
                            price='42.00'
                            discount='65.00'
                            imageUrl={image6}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Latest;
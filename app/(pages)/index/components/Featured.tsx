"use client"
import { Josefin_Sans } from "next/font/google"
import image1 from '@public/assets/feature/img-1.svg';
import image2 from '@public/assets/feature/img-2.svg';
import image3 from '@public/assets/feature/img-3.svg';
import image4 from '@public/assets/feature/img-4.svg';
import Card from "./_components/FeaturedCard";
import { useState } from "react";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})

const Featured = ()=>{
    const [tab, setTab] = useState<number>(1);
    const handleTabChange = (index: number) => {
        setTab(index);
    }
    return (
        <>
            <section className="p-5 my-6">
                <h2 className={`text-text text-2xl md:text-4xl font-bold text-center w-full mb-4 ${j_sans.className}`}>Featured Products</h2>
                <div className="grid grid-cols-2 md:flex lg:flex-between md:flex-center md:flex-row md:flex-wrap lg:flex-nowrap max-w-[60rem] mx-auto w-full gap-4">
                    <Card
                    title='Cantilever chair'
                    code='Y5203201'
                    price="42.00"
                    imageUrl={image1}
                    />
                    <Card
                    title='Cantilever chair'
                    code='Y5203201'
                    price="42.00"
                    imageUrl={image2}
                    />
                    <Card
                    title='Cantilever chair'
                    code='Y5203201'
                    price="42.00"
                    imageUrl={image3}
                    />
                    <Card
                    title='Cantilever chair'
                    code='Y5203201'
                    price="42.00"
                    imageUrl={image4}
                    />
                </div>
                <div className="w-full flex-center gap-2 my-6">
                    <button onClick={()=>{
                        handleTabChange(1)
                    }} className={`bg-accent h-[4px] px-2 rounded-md duration-300 ease-in-out ${tab === 1 ? 'bg-opacity-100 w-6' : 'bg-opacity-40 w-[4px]'}`}></button>
                    <button onClick={()=>{
                        handleTabChange(2)
                    }} className={`bg-accent h-[4px] px-2 rounded-md duration-300 ease-in-out ${tab === 2 ? 'bg-opacity-100 w-6' : 'bg-opacity-40 w-[4px]'}`}></button>
                    <button onClick={()=>{
                        handleTabChange(3)
                    }} className={`bg-accent h-[4px] px-2 rounded-md duration-300 ease-in-out ${tab === 3 ? 'bg-opacity-100 w-6' : 'bg-opacity-40 w-[4px]'}`}></button>
                    <button onClick={()=>{
                        handleTabChange(4)
                    }} className={`bg-accent h-[4px] px-2 rounded-md duration-300 ease-in-out ${tab === 4 ? 'bg-opacity-100 w-6' : 'bg-opacity-40 w-[4px]'}`}></button>
                </div>
            </section>
        </>
    )
}

export default Featured
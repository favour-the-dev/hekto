import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
interface Trending{
    title: string
    discountedPrice: number,
    price: number;
    image: string;
}

const TrendingProducts = ({title, image, price, discountedPrice} : Trending) => {
    return (
        <>
            <div className="group flex-center flex-col w-full max-w-[250px] h-fit bg-white rounded-sm shadow-sm cursor-pointer p-2 relative">
                <div className="flex-center flex-col gap-2 text-xl opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute left-2 bottom-[35%] lg:bottom-[30%]">
                    <span className="hover:bg-[#EEEFFB] text-blue p-1 rounded-full"><IoCartOutline/></span>
                    <span className="text-blue hover:bg-[#EEEFFB] p-1 rounded-full"><CiHeart /></span>
                    <span className="text-blue hover:bg-[#EEEFFB] p-1 rounded-full text-sm"><FaSearchPlus/></span>
                </div>
                <div className="bg-[#F6F7FB] p-2 rounded-sm w-full flex-center flex-col">
                <Image 
                    src={image} 
                    alt="image"
                    width={200}
                    height={200}
                    className="w-[150px] h-[100px] md:h-[150px]"
                    />
                </div>
                <div className="flex-center flex-col w-full text-sm text-text py-2">
                    <span className="font-bold">{title}</span>
                    <div className="flex-center gap-1 font-semibold text-xs"><span>${price}.00</span><span className="text-subText line-through">${discountedPrice}.00</span></div>
                </div>
            </div>
        </>
    )
}

export default TrendingProducts
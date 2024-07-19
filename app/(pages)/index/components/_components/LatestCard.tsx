import Image from "next/image"
import sold from "@public/assets/latest/sold.svg";
import { FaSearchPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5"
const ProductCard = ({title, price, discount = '', imageUrl }: {title: string, price:string, discount:string, imageUrl:string}) => {
    return (
        <>
            <div className={`group flex-center flex-col gap-3 md:max-w-[280px] w-full bg-[#F7F7F7] cursor-pointer relative hover:bg-white ease-in-out duration-300`}>
                {
                    discount !== '' && 
                    <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 ease-in-out duration-300">
                        <Image
                        src={sold}
                        alt="sold"
                        width={80}
                        height={80}
                        />
                    </div>
                }
                <div className="ease-in-out duration-300 cursor-pointer flex-center flex-col gap-3 absolute left-1 md:left-2 bottom-[35%] lg:bottom-[15%] text-xl opacity-0 group-hover:opacity-100">
                    <span className="hover:bg-[#EEEFFB] text-blue p-1 rounded-full text-sm"><FaSearchPlus/></span>
                    <span className="hover:bg-[#EEEFFB] text-blue p-1 rounded-full"><CiHeart/></span>
                    <span className="hover:bg-[#EEEFFB] text-blue p-1 rounded-full"><IoCartOutline/></span>
                </div>
                <div className="rounded-sm p-4">
                    <Image
                    src={imageUrl}
                    alt={title}
                    width={250}
                    height={250}
                    className="w-[150px] h-[150px] lg:h-[200px] lg:w-[200px]"
                    />
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:flex-between w-full bg-white pt-3">
                    <h3 className=" text-text relative capitalize text-sm font-bold after:bg-[#EEEFFB] after:w-full after:h-[2px] after:absolute after:bottom-[-15%] after:left-0">{title}</h3>
                    <div className="flex-start gap-1">
                        <span className="text-text text-xs font-semibold">${price}</span>
                        {discount !== '' && <span className="text-accent text-xs font-semibold line-through">${discount}</span>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
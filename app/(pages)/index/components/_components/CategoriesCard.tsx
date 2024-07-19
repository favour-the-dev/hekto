import Image from "next/image"
interface CategoriesProductCard{
    imageUrl: string,
    title: string
    price: number,
    discountedPrice: number,
}
const CategoriesCard = ({imageUrl, title, price, discountedPrice}: CategoriesProductCard) => {
    return (
        <>
            <div className="group flex-center flex-col w-full max-w-[250px] h-fit bg-white cursor-pointer p-2 relative">
                <div className="bg-[#F6F7FB] p-3 rounded-full w-full flex-center flex-col">
                    <Image 
                        src={imageUrl} 
                        alt="image"
                        width={200}
                        height={200}
                        className="w-[150px] h-[100px] md:h-[150px]"
                    />
                </div>
                <div className="flex-center flex-col w-fit text-sm text-text py-2">
                    <span className="font-bold">{title}</span>
                    <div className="flex-center gap-1 font-semibold text-xs"><span>${price}.00</span>{discountedPrice > 0 && <span className="text-subText line-through">${discountedPrice}.00</span>}</div>
                </div>
            </div>
        </>
    )
}

export default CategoriesCard
import Image from "next/image"
const ProductCard = ({title, price, discount = 'none', imageUrl }: {title: string, price:string, discount:string, imageUrl:string}) => {
    return (
        <>
            <div className="flex-center flex-col gap-3 lg:max-w-[280px] w-full bg-[#F7F7F7] cursor-pointer">
                <div className="rounded-sm p-4">
                    <Image
                    src={imageUrl}
                    alt={title}
                    width={250}
                    height={250}
                    className="w-[150px] md:h-[200px] md:w-[200px]"
                    />
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:flex-between w-full bg-white pt-3">
                    <h3 className=" text-text relative capitalize text-sm font-bold after:bg-[#EEEFFB] after:w-full after:h-[2px] after:absolute after:bottom-[-15%] after:left-0">{title}</h3>
                    <div className="flex-start gap-1">
                        <span className="text-text text-xs font-semibold">${price}</span>
                        {discount !== 'none' && <span className="text-accent text-xs font-semibold line-through">${discount}</span>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
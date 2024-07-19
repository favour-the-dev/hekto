import { Josefin_Sans } from "next/font/google";
import TrendingProducts from "./_components/TrendingCard";
import Link from "next/link";
import Image from "next/image";
import image1 from "@public/assets/trending/img-1.svg";
import image2 from "@public/assets/trending/img-2.svg";
import image3 from "@public/assets/trending/img-3.svg";
import image4 from "@public/assets/trending/img-4.svg";
import image5 from "@public/assets/trending/img-5.svg";
import image6 from "@public/assets/trending/img-6.svg";
import image7 from "@public/assets/trending/img-7.svg";
import clock from "@public/assets/trending/clock.svg";
import cupboard from "@public/assets/trending/cupboard.svg";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
function Trending() {
    return ( 
        <>
            <section className="w-full p-5 flex-center my-8">
                <div className="w-full max-w-[60rem] mx-auto">
                    <h2 className={`${j_sans.className} font-bold text-text text-2xl md:text-4xl text-center w-full mb-4`}>Trending Products</h2>
                    <div className="mt-6 grid grid-cols-2 lg:flex lg:flex-center gap-4 md:gap-8 place-items-center">
                        <TrendingProducts
                            title="Cantilever chair"
                            image={image1}
                            price={26}
                            discountedPrice={43}
                        />
                        <TrendingProducts
                            title="Cantilever chair"
                            image={image2}
                            price={26}
                            discountedPrice={43}
                        />
                        <TrendingProducts
                            title="Cantilever chair"
                            image={image3}
                            price={26}
                            discountedPrice={43}
                        />
                        <TrendingProducts
                            title="Cantilever chair"
                            image={image4}
                            price={26}
                            discountedPrice={43}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                        <div className="bg-[#FFF6FB] text-text flex-start flex-col gap-1 rounded-sm shadow-sm p-2 px-4 h-fit col-span-1">
                            <h2 className="text-xl font-bold">23% off in all products</h2>
                            <Link
                            href='/'
                            className="text-accent underline cursor-pointer text-sm">Shop Now</Link>
                            <Image
                            src={clock}
                            alt="clock"
                            width={180}
                            height={180}
                            className="self-end"
                            />
                        </div>
                        <div className="bg-[#EEEFFB] text-text flex-start flex-col gap-1 rounded-sm shadow-sm p-2 px-4 h-fit col-span-1" >
                            <h2 className="text-xl font-bold">23% off in all products</h2>
                            <Link
                            href='/'
                            className="text-accent underline cursor-pointer text-sm">View Collection</Link>
                            <Image
                            src={cupboard}
                            alt="clock"
                            width={180}
                            height={180}
                            className="self-end h-[180px]"
                            />
                        </div>
                        <div className="flex-start flex-col gap-4 cols-span-2 h-fit">
                            <div className="flex-start gap-2 w-full">
                                <div className="bg-[#F5F6F8] px-3 p-1 rounded-sm">
                                    <Image
                                    src={image5}
                                    alt="chair-1"
                                    width={60}
                                    height={60}
                                    className=""
                                    />
                                </div>
                                <div className="flex-start flex-col text-text text-sm md:text-base">
                                    <span>Executive Seat chair</span>
                                    <span>$38.00</span>
                                </div>
                            </div>
                            <div className="flex-start gap-2 w-full">
                                <div className="bg-[#F5F6F8] px-3 p-1 rounded-sm">
                                    <Image
                                    src={image6}
                                    alt="chair-1"
                                    width={60}
                                    height={60}
                                    className=""
                                    />
                                </div>
                                <div className="flex-start flex-col text-text text-sm md:text-base">
                                    <span>Executive Seat chair</span>
                                    <span>$38.00</span>
                                </div>
                            </div>
                            <div className="flex-start gap-2 w-full">
                                <div className="bg-[#F5F6F8] px-3 p-1 rounded-sm">
                                    <Image
                                    src={image7}
                                    alt="chair-1"
                                    width={60}
                                    height={60}
                                    className=""
                                    />
                                </div>
                                <div className="flex-start flex-col text-text text-sm md:text-base">
                                    <span>Executive Seat chair</span>
                                    <span>$38.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Trending;
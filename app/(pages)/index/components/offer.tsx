import { Josefin_Sans } from "next/font/google";
import image1 from "@public/assets/offers/img-1.svg";
import image2 from "@public/assets/offers/img-2.svg";
import image3 from "@public/assets/offers/img-3.svg";
import image4 from "@public/assets/offers/img-4.svg";
import Image from "next/image";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
const Offer = () => {
    return (
        <>
            <section className='w-full p-6 mb-6'>
                <div className='w-full max-w-[60rem] mx-auto py-6'>
                    <h2 className={`${j_sans.className} font-bold text-text text-2xl md:text-4xl text-center w-full mb-4`}>What Hekto Offers</h2>
                    <div className="flex-center flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 mt-4">
                        <div className="flex-center flex-col shadow-sm rounded-md bg-[#FFFFFF] w-3/4 md:w-fit p-2 gap-2 border-2 border-gray-100">
                            <Image
                            src={image1}
                            alt="offer"
                            width={60}
                            height={60}
                            />
                            <span className="font-bold text-text text-sm">Free Delivery</span>
                            <span className="text-subText text-sm text-center whitespace-pre-wrap leading-5 w-[80%]">
                            Hekto: Free delivery. Style delivered, straight to your door.</span>
                        </div>
                        <div className="flex-center flex-col shadow-sm rounded-md bg-[#FFFFFF] w-3/4 md:w-fit p-2 gap-2 border-2 border-gray-100">
                            <Image
                            src={image2}
                            alt="offer"
                            width={60}
                            height={60}
                            />
                            <span className="font-bold text-text text-sm">Return Policy</span>
                            <span className="text-subText text-sm text-center whitespace-pre-wrap leading-5 w-[80%]">
                            Hekto: Stress-free returns. Love it or return it, hassle-free.</span>
                        </div>
                        <div className="flex-center flex-col shadow-sm rounded-md bg-[#FFFFFF] w-3/4 md:w-fit p-2 gap-2 border-2 border-gray-100">
                            <Image
                            src={image3}
                            alt="offer"
                            width={60}
                            height={60}
                            />
                            <span className="font-bold text-text text-sm">Membership</span>
                            <span className="text-subText text-sm text-center whitespace-pre-wrap leading-5 w-[80%]">
                            Hekto Member: Unlock savings, elevate your home.</span>
                        </div>
                        <div className="flex-center flex-col shadow-sm rounded-md bg-[#FFFFFF] w-3/4 md:w-fit p-2 gap-2 border-2 border-gray-100">
                            <Image
                            src={image4}
                            alt="offer"
                            width={60}
                            height={60}
                            />
                            <span className="font-bold text-text text-sm">24/7 support</span>
                            <span className="text-subText text-sm text-center whitespace-pre-wrap leading-5 w-[80%]">
                            Hekto: 24/7 Support. Never a question left unanswered.</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offer
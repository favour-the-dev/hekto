import { Josefin_Sans } from "next/font/google";
import lamp from '@public/assets/images/lamp.svg';
import chair from '@public/assets/images/herochair.svg';
import star from '@public/assets/images/star.svg';
import Image from "next/image";
const jsans = Josefin_Sans({
    subsets: ["latin"]
})
function Hero() {
    const year = new Date().getFullYear();
    return ( 
        <>
            <section className="w-full bg-herobg flex-center flex-col bg-opacity-35 p-5">
                <div className="flex-between mobile-flex w-full max-w-[60rem] mx-auto h-full gap-3 relative">
                    <Image
                    src={lamp}
                    alt="Hero Lamp"
                    className="absolute left-[-25%] top-[-4%] hidden xl:block"
                    width={300}
                    height={300}
                    />
                    <div className="flex-start flex-col gap-3 md:w-1/2">
                        <span className="text-sm text-accent capitalize font-bold">best furniture for your castle</span>
                        <h1 className={`text-4xl  lg:text-6xl font-bold ${jsans.className} w-fit`}>New Furniture Collection
                        Trends in {year}</h1>
                        <p className="sub-text">Explore our collection of premium furniture, designed to elevate your spaces with unparalleled style, comfort, and quality. Shop now."</p>
                        <button className="btn-accent py-3 px-4 w-full sm:w-fit">Shop Now</button>
                    </div>
                    <div>
                        <Image
                        src={chair}
                        alt="Hero Chair"
                        className=""
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image
                    src={star}
                    alt="star"
                    width={50}
                    height={50}
                    />
                </div>
            </section>
        </>
    );
}

export default Hero;
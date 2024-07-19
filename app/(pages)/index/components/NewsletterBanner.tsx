import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import carousel from "@public/assets/images/carousel.svg";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
const NewsletterBanner = () => {
    return (
        <>
            <section className={`w-full p-12 my-6 news-letter`}>
                <div className="w-full flex-center flex-col gap-3">
                    <h2 className={`${j_sans.className} font-bold text-text text-2xl md:text-3xl text-center w-fit md:w-[50%] mb-4`}>Get Latest Update By Subscribing To
                    0ur Newsletter</h2>
                    <label htmlFor="" className="w-fit flex-center">
                        <input type="email" className="p-2 focus:outline-none placeholder:text-sm w-2/3" placeholder="Enter Your Email"/>
                        <button className="btn-accent text-xs rounded-sm px-4 p-3 whitespace-nowrap">Join Newsletter</button>
                    </label>
                </div>
            </section>
            <section className="w-full flex-center flex-col my-6">
                <Image
                src={carousel}
                alt="carousel"
                width={800}
                height={800}
                />
            </section>
        </>
    )
}

export default NewsletterBanner
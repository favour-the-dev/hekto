import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import oops from "@public/assets/images/oops.svg";
import carousel from "@public/assets/images/carousel.svg";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
function NotFound() {
    return ( 
        <>
        <div className="w-full flex-center flex-col">
            <div className="bg-light_bg w-full py-5 md:py-10 lg:py-16">
                <div className="w-full max-w-[60rem] mx-auto">
                    <div className="flex-start flex-col px-5 md:px-0">
                        <h2 className={`font-bold text-2xl md:text-3xl text-text ${j_sans.className}`}>404 Not Found</h2>
                        <p className="text-sm flex-start gap-1"><span>Home.</span><span>pages.</span><span className="text-accent">404 Not Found</span></p>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[60rem] mx-auto text-text flex-center flex-col my-5">
                <div className="">
                    <Image
                    src={oops}
                    alt="not-found"
                    width={600}
                    height={500}
                    />
                </div>
                <Link href='/'><button className="btn-accent text-sm p-2 px-4 rounded-sm">Back To Home</button></Link>
                <div className="my-4"><Image src={carousel} alt="sponsors" width={800} height={800}/></div>
            </div>
        </div>
        </>
    );
}

export default NotFound;
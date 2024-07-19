import { Josefin_Sans } from "next/font/google";
import sofa from "@public/assets/images/sofa.svg";
import Image from "next/image";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
function FeaturedTrending() {
    return ( 
        <>
            <section className="w-full bg-herobg text-text p-6 my-6">
                <div className="w-full max-w-[60rem] mx-auto flex-center flex-col md:flex-row gap-4">
                    <div>
                        <Image
                        src={sofa}
                        alt="sofa"
                        width={600}
                        height={600}
                        />
                    </div>
                    <div className="flex-start flex-col gap-3">
                        <h2 className={`text-3xl md:text-4xl font-bold ${j_sans.className}`}>Unique Features Of latest &
                        Trending Poducts</h2>
                        <div className="flex-start flex-col gap-3 text-sm lg:text-base text-subText">
                            <li className="marker:text-accent marker:p-1">All frames constructed with hardwood solids and laminates</li>
                            <li className="marker:text-blue marker:p-1">Reinforced with double wood dowels, glue, screw - nails corner 
                            blocks and machine nails</li>
                            <li className="marker:text-bright_green marker:p-1">Arms, backs and seats are structurally reinforced</li>
                        </div>
                        <div className="flex-start gap-2 mt-4">
                            <button className="btn-accent text-sm capitalize px-4 p-3">Add To Cart</button>
                            <div className="flex-start flex-col gap-1 text-sm text-text font-semibold">
                                <span>B&B Italian Sofa </span>
                                <span>$32.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturedTrending;
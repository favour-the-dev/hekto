import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
function Footer(){
    return(
        <>
            <footer className="w-full bg-[#EEEFFB] flex-center flex-col">
                <div className="max-w-[60rem] w-full mx-auto flex-start flex-col md:flex-row text-text gap-6 p-6">
                    <div className="flex-start flex-col gap-2">
                        <h1 className={`${j_sans.className} font-bold text-2xl md:text-3xl`}>Hekto</h1>
                        <label htmlFor="" className="flex-start items-center w-full">
                            <input type="text" placeholder="Enter email address" className="focus:outline-none border rounded-sm p-2 w-2/3 md:w-fit"/>
                            <button className="btn-accent px-4 p-3 md:p-[10px] text-xs md:text-sm text-nowrap">Sign Up</button>
                        </label>
                        <div className="flex flex-col items-start gap-1 text-subText text-sm">
                            <span className="capitalize">contact info</span>
                            <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
                        </div>
                    </div>
                    <div className="flex-between md:flex-start flex-wrap gap-8 lg:flex-nowrap">
                        <div className="flex-start flex-col gap-2 whitespace-nowrap">
                            <h2 className={`${j_sans.className} font-bold text-xl md:text-2xl`}>Categories</h2>
                            <div className="flex-start flex-col gap-3 text-xs">
                                <Link href='' className="text-subText capitalize">Laptops & Computers</Link>
                                <Link href='' className="text-subText capitalize">Cameras & Photographyters</Link>
                                <Link href='' className="text-subText capitalize">Smart Phones & Tablets</Link>
                                <Link href='' className="text-subText capitalize">Video Games & Consoles</Link>
                                <Link href='' className="text-subText capitalize">Waterproof Headphones</Link>
                            </div>
                        </div>  
                        <div className="flex-start flex-col gap-2 whitespace-nowrap">
                            <h2 className={`${j_sans.className} font-bold text-xl md:text-2xl`}>Customer Care</h2>
                            <div className="flex-start flex-col gap-3 text-xs">
                                <Link href='' className="text-subText capitalize">My Account</Link>
                                <Link href='' className="text-subText capitalize">Discount</Link>
                                <Link href='' className="text-subText capitalize">Returns</Link>
                                <Link href='' className="text-subText capitalize">Orders History</Link>
                                <Link href='' className="text-subText capitalize">Order Tracking</Link>
                            </div>
                        </div> 
                        <div className="flex-start flex-col gap-3 whitespace-nowrap">
                            <h2 className={`${j_sans.className} font-bold text-xl md:text-2xl`}>Pages</h2>
                            <div className="flex-start flex-col gap-2 text-xs">
                                <Link href='' className="text-subText capitalize">Blog</Link>
                                <Link href='' className="text-subText capitalize">Browse the Shop</Link>
                                <Link href='' className="text-subText capitalize">Category</Link>
                                <Link href='' className="text-subText capitalize">Pre-Built Pages</Link>
                                <Link href='' className="text-subText capitalize">Visual Composer Elements</Link>
                                <Link href='' className="text-subText capitalize">WooCommerce Pages</Link>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="w-full bg-[#E7E4F8] text-subText p-2">
                    <div className="max-w-[60rem] w-full mx-auto flex-center flex-col md:flex-row md:flex-between px-6 gap-2">
                        <div className="text-xs">
                            <span>©FavourOdili - All Rights Reserved</span>
                        </div>
                        <div className="flex-center gap-2">
                            <span className="bg-text text-xs text-white p-1 rounded-full"><FaFacebookF /></span>
                            <span className="bg-text text-xs text-white p-1 rounded-full"><RiInstagramFill /></span>
                            <span className="bg-text text-xs text-white p-1 rounded-full"><FaTwitter /></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";
import { CiPen } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
interface BlogCard{
    imageUrl: string
    author: string
    date: Date
    title: string
    desc: string
}
function BlogCard({title, imageUrl, author, date, desc}: BlogCard) {
    return ( 
            <>
                <div className="group duration-300 ease-in-out hover:scale-105 text-text flex-center flex-col w-full max-w-[300px] h-fit bg-white cursor-pointer relative rounded-md p-2 shadow-sm mx-auto">
                    <div className="w-full">
                        <Image
                        src={imageUrl}
                        alt="blog image"
                        width={300}
                        height={200}
                        className=""
                        />
                    </div>
                    <div className="flex-start flex-col gap-2 py-3">
                        <div className="flex-start gap-4 text-xs font-semibold">
                            <span className="flex-center gap-1"><span className="text-accent"><CiPen /></span>{author}</span>
                            <span className="flex-center gap-1"><span className="text-[#FFA454]"><CiCalendar /></span>{date.toLocaleDateString()}</span>
                        </div>
                        <div className="flex-start flex-col gap-2">
                            <h3 className={`${j_sans.className} font-bold text-xl group-hover:text-accent duration-300 ease-in-out`}>{title}</h3>
                            <p className="text-subText text-sm">{desc}</p>
                            <Link href='' className="text-sm underline font-semibold group-hover:text-accent duration-300 ease-in-out">Read More</Link>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default BlogCard;
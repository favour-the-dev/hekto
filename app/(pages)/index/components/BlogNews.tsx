import { Josefin_Sans } from "next/font/google";
import BlogCard from "./_components/BlogCard";
import image1 from '@public/assets/blog/img-1.svg';
import image2 from '@public/assets/blog/img-2.svg';
import image3 from '@public/assets/blog/img-3.svg';
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
const BlogNews = () => {
    const current_date = new Date();
    return (
        <>
            <div className='w-full p-5 my-6'>
                <div className="w-full max-w-[60rem] mx-auto">
                    <h2 className={`${j_sans.className} font-bold text-text text-2xl md:text-4xl text-center w-full mb-4`}>Latest Blog</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 place-content-center w-full gap-4">
                        <BlogCard
                        imageUrl={image1}
                        author='SaberAli'
                        date= {current_date}
                        title="Top esssential Trends in 2021"
                        desc='More off this less hello samlande lied much over tightly circa horse taped mightly'
                        />
                        <BlogCard
                        imageUrl={image2}
                        author='Favour Odili'
                        date= {current_date}
                        title="Top esssential Trends in 2021"
                        desc='More off this less hello samlande lied much over tightly circa horse taped mightly'
                        />
                        <BlogCard
                        imageUrl={image3}
                        author='SaberAli'
                        date= {current_date}
                        title="Top esssential Trends in 2021"
                        desc='More off this less hello samlande lied much over tightly circa horse taped mightly'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogNews
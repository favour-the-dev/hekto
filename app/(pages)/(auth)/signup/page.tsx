"use client"
import { Josefin_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import carousel from "@public/assets/images/carousel.svg";
import { FcGoogle } from "react-icons/fc";
import { useState, useRef, useEffect } from "react";
import loader from "@public/assets/loaders/89.gif";
import { register } from "@actions/register";

import { useSession } from "next-auth/react";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
import { signIn} from "next-auth/react";

const SignIn = () => {
    const [error, setError] = useState<string>('');
    const [loading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const ref = useRef<HTMLFormElement | any>(null);
    const handleSubmit = async (e: any)=>{ 
            e.preventDefault();
            setIsLoading(true)
            let formData = new FormData(ref.current)
            let formDatavValues = {
                first_Name: formData.get("firstName"),
                last_name: formData.get("lastName"),
                email: formData.get("email"),
                password: formData.get("password"),
            }
            const r = await register(formDatavValues)
            ref.current?.reset()
            setIsLoading(false);
            if(r?.error){
                setIsLoading(false)
                setError(r.error)
                console.log(error)
                return
            }else{
                setIsLoading(false)
                return router.push('/login')
            }
    }
    const {status} = useSession();
    const handleGoogleSignIn = ()=>{
        signIn('google')
    }
    useEffect(()=>{
        if(status.trim() === "authenticated"){
            return router.push('/profile')
        }
    }, [status])
    return (
        <>
            <section className="w-full flex-center flex-col">
                <div className="bg-light_bg w-full py-5 md:py-10 lg:py-16">
                    <div className="w-full max-w-[60rem] mx-auto">
                        <div className="flex-start flex-col px-5 md:px-0">
                            <h2 className={`font-bold text-2xl md:text-3xl text-text ${j_sans.className}`}>Sign Up</h2>
                            <p className="text-sm flex-start gap-1"><span>Home.</span><span>pages.</span><span className="text-accent">Sign Up</span></p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[60rem] mx-auto py-12 px-8 md:px-10 md:py-12 flex-center flex-col">
                    <div className="w-full md:w-1/3 flex-center flex-col gap-4">
                        <div className="w-full flex-center text-center flex-col gap-1">
                            <h2 className="font-bold text-3xl text-text">Sign Up</h2>
                            <h3 className="text-sm text-subText">Welcome to Hekto, Sign Up to enjoy the premium shopping experience.</h3>
                        </div>
                        <form className="w-full flex-center flex-col gap-3"
                        ref = {ref}
                        onSubmit={(e)=>{handleSubmit(e)}}
                        >
                            <div className="w-full flex items-center gap-2">
                                <label htmlFor="firstName" className="w-full">
                                    <input name="firstName" type="text" placeholder="First Name" required className="w-full border border-gray-200 focus:outline-none p-2"/>
                                </label>
                                <label htmlFor="lastName" className="w-full">
                                    <input name="lastName" type="text" placeholder="Last Name" required className="w-full border border-gray-200 focus:outline-none p-2"/>
                                </label>
                            </div>
                            <label htmlFor="phoneNo" className="w-full">
                                <input name="phoneNo" type="tel" placeholder="Phone Number" required className="w-full border border-gray-200 focus:outline-none p-2"/>
                            </label>
                            <label htmlFor="email" className="w-full">
                                <input name="email" type="email" placeholder="Email Address" required className="w-full border border-gray-200 focus:outline-none p-2"/>
                            </label>
                            <label htmlFor="password" className="w-full">
                                <input name="password" type="password" placeholder="Password" required className="w-full border border-gray-200 focus:outline-none p-2"/>
                            </label>
                            <label htmlFor="confirmPassword" className="w-full">
                                <input name="confirmpassword" type="password" placeholder="Confirm Password" required className="w-full border border-gray-200 focus:outline-none p-2"/>
                            </label>
                            <button type="submit" className="w-full btn-accent text-sm rounded-sm p-2">
                                {loading ? <Image src={loader} alt="loading spinner" width={50} height={50} /> : 'Sign Up'}
                            </button>
                        </form>
                        <div className="relative w-full flex-center flex-col">
                            <span className="before:w-[45%] before:top-[50%] before:bg-black before:absolute before:h-[1px] before:left-0 after:w-[45%] after:top-[50%] after:bg-black after:absolute after:h-[1px] after:right-0 font-semibold text-text">OR</span>
                        </div>
                        <button onClick={()=>  handleGoogleSignIn()} className="w-full flex justify-center gap-3 items-center border border-gray-300 hover:border-accent hover:text-accent duration-300 ease-linear p-2 text-sm rounded-sm"><FcGoogle className="text-2xl"/>Sign in with Google</button>
                        <span className="text-subText text-sm cursor-pointer">Already have an Account with us? <Link href="/login" className="text-accent hover:underline">Login</Link></span>
                    </div>
                    <div className="my-8"><Image src={carousel} alt="sponsors" width={800} height={800}/></div>
                </div>
            </section>
        </>
    )
}

export default SignIn
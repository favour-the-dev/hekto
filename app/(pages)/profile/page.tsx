"use client"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
const Profile = ()=>{
    const {status ,data} = useSession();
    const nameData = data?.user?.name as string;
    const emailData = data?.user?.email as string;
    const imageData = data?.user?.image as string;
    const router = useRouter();
    useEffect(()=>{
        if(status === "authenticated"){
            return
        }
        router.push('/')
    }, [status])
    return (
        <>
            <section className="w-full flex-center flex-col">
                <div className="bg-light_bg w-full py-5 md:py-10 lg:py-16">
                    <div className="w-full max-w-[60rem] mx-auto">
                        <div className="flex-start flex-col px-5 md:px-0">
                            <h2 className={`font-bold text-2xl md:text-3xl text-text ${j_sans.className}`}>Profile</h2>
                            <p className="text-sm flex-start gap-1"><span>Home.</span><span>pages.</span><span className="text-accent">Profile</span></p>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[60rem] mx-auto flex-start flex-col gap-2">
                    <div className="w-full flex items-center gap-4">
                        <div>
                            <Image src={imageData} alt="profile image" height={300} width={300} className="rounded-full"/>
                        </div>
                        <div>
                            <h3 className={`font-bold text-2xl md:text-3xl text-text ${j_sans.className}`}>{nameData}</h3>
                            <p className="text-sm text-gray-500">{emailData}</p>
                            <button className="py-2 px-4 border border-accent rounded-md text-white bg-accent w-fit text-sm hover:bg-transparent hover:text-accent" onClick={()=>signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
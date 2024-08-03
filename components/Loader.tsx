"use client"
import { Josefin_Sans } from "next/font/google";
const j_sans = Josefin_Sans({
    subsets: ["latin"]
})
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
function Loader() {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsVisible(!isVisible)
        }, 1500)
    })
    return ( 
        <>
            <div className="w-full h-full fixed top-0 left-0 z-[70] bg-white flex-center flex-col">
                <AnimatePresence>
                    {isVisible && <motion.div
                    initial={{opacity: 0, x:-100, scale: 0.5}}
                    animate={{opacity: 1, x: 0, scale: 1}}
                    exit={{opacity: 0, x: 100, scale: 0.5}} 
                    transition={{
                        duration: 0.5,
                        ease: "linear",
                    }}
                    >
                    <h1 className={`${j_sans.className} font-bold text-6xl text-text`}>Hekto</h1>
                    </motion.div>}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Loader;
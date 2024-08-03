"use client"
import Loader from "@components/Loader";
import { AppState } from "./state/state";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
function AppContext({children}: {children: React.ReactNode}) {
    const loading = AppState((state)=> state.loading)
    const setLoading = AppState((state)=> state.setLoading)
    const pathName = usePathname();
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        }, 2000)
    }, [pathName])
    return ( 
        <>
        <div>
            {loading && <Loader/>}
            {children}
        </div>
        </>
     );
}

export default AppContext;
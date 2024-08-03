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

// GOGGLE_CLIENT_ID="420297582008-l7gempo2ctokj4s1f74miqb0l67r5n2u.apps.googleusercontent.com"
// GOOGLE_CLIENT_SECRET="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"
// NEXT_AUTH_SECRET="oOuHWwfc139sQliBHdWytd6HkIvqvU4KuumLuLB5L1I="
// MONGODB_URI = "mongodb+srv://favourto91:Scm2y01DMRuOHF1v@cluster0.5jtrx3n.mongodb.net/"
// password = "Scm2y01DMRuOHF1v"
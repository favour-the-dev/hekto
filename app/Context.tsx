"use client"
import Loader from "@components/Loader";
import { AppState } from "./state/state";
function AppContext({children}: {children: React.ReactNode}) {
    const loading = AppState((state)=> state.loading)
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
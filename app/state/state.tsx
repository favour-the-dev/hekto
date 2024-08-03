import { create } from "zustand";

interface AppStateProps{
    loading: boolean;
    loggedIn: boolean;
    setLoading: (loading: boolean)=> void;
    setLoggedIn: (loggedIn: boolean)=> void;
}

export const AppState = create<AppStateProps>((set)=>({
    loading: false,
    loggedIn: false,
    setLoading: (loading) => set(()=> ({loading: loading})),  // update Loadding state
    setLoggedIn: (loggedIn) => set(()=>({loggedIn: loggedIn}))  // update loggedIn state
}))
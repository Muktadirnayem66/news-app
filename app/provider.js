"use client"
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
const Provider = ({children}) => {

    const [mount, setMount] = useState(false)
    useEffect(()=>{
        setMount(true)
        
    },[])
    if(!mount){
        return <>{children}</>
    }
    return (
        <ThemeProvider attribute="class" enableSystem >
            {children}
        </ThemeProvider>
    );
};

export default Provider;
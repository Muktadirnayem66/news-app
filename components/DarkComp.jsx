"use client"

import Image from "next/image";
import { useState } from "react";
import Moon from '@/public/moon.svg'
import Sun from '@/public/sun.svg'
import {FaMoon} from 'react-icons/fa'
import { IoMdSunny } from "react-icons/io";

import { useTheme } from "next-themes";
const DarkComp = () => {
    
    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === "system"? systemTheme : theme
    return (
        <div className=" cursor-pointer">
            {currentTheme === "light"? <FaMoon onClick={()=>setTheme("dark")}/> : <IoMdSunny onClick={()=>setTheme("light")}/>} 
        </div>
    );
};

export default DarkComp;
import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '../libs/utils';

export const ThemeToggle = () => {
    const [isDarkMode , setIsDarkMode] = useState(true);

    useEffect( ()=>{
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }else{
            setIsDarkMode(false);
            localStorage.setItem("theme" , "light");
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme" , "light");
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
            setIsDarkMode(true);
        }
    }


  return (
    <button onClick={toggleTheme}
    className={cn("fixed max-sm:hidden top-3 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
    )}
    >
        {" "}
        {isDarkMode ? (< Sun className='h-6 w-6 text-white hover:text-primary transition-colors duration-300' /> 
        ) : (
        < Moon className='h-6 w-6 text-blue-500 hover:text-black transition-colors duration-300' />)}
    </button>
  )
}

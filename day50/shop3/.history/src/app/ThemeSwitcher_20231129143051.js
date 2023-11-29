"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
export default function ThemeSwitcher() {
     const [mounted, setMounted] = useState(false);
     const { theme, setTheme } = useTheme();

     useEffect(() => {
          setMounted(true);
     }, []);

     if (!mounted) {
          return null;
     }
     const handleTheme = () => {
          if (theme === "light") {
               setTheme("dark")
          } else {
               setTheme("light")
          }
     }
     return (
          <div>
               <button onClick={handleTheme}>
                    {
                         theme === "light" ? <MdNightlight className="icon" /> : <MdLightMode className="icon" />
                    }
               </button>

          </div>
     )
}

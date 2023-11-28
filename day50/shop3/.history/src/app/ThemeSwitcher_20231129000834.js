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
     return (
          <div>
               <button>Light</button>
               <button>Dark</button>
          </div>
     )
}

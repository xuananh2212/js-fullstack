import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
     const { theme, setTheme } = useTheme();
     return (
          <div>
               <button>Light</button>
               <button>Dark</button>
          </div>
     )
}

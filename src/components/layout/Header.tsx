import colorThemeIcon from "@/assets/contrast-outline.svg";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { toggleTheme } = useTheme();

  return (
    <header className="w-full h-12 fixed bg-secondary">
      <div className="px-10 lg:px-10 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link to="/" className=" text-base sm:text-lg text-primary font-extrabold">
          Algorithmn Visualisations
        </Link>
        <button onClick={toggleTheme}>
          <img
            className="w-6 h-6 sm:w-8 sm:h-8"
            src={colorThemeIcon}
            alt="Switch the color theme"
          />
        </button>
      </div>
    </header>
  );
}

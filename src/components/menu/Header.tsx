import colorThemeIcon from "../../assets/contrast-outline.svg";

export default function Header({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <header className="w-full h-12 fixed bg-secondary">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <h1 className="text-xl text-primary font-extrabold">
          Algorithmn Visualisations
        </h1>
        <button onClick={toggleTheme}>
          <img
            className="w-8 h-8"
            src={colorThemeIcon}
            alt="Switch the color theme"
          />
        </button>
      </div>
    </header>
  );
}

import Header from "@/components/menu/Header";
import useTheme from "@/hooks/useTheme";
import AlgorithmList from "@/components/menu/AlgorithmList";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <Header toggleTheme={toggleTheme} />
      <main className="min-h-screen w-full bg-background text-text flex flex-col justify-center items-center gap-10 p-24">
        <div className="h-48 flex justify-center items-center">
          <h1 className="text-primary text-6xl font-extrabold">
            Choose an <span className="text-accent">algorithmn</span>
          </h1>
        </div>
        <AlgorithmList />
      </main>
    </div>
  );
}

export default App;

import useTheme from "@/hooks/useTheme";
import Header from "@/components/menu/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
    </div>
  );
}

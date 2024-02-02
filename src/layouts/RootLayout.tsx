import Header from "@/components/layout/Header";
import { useTheme } from "@/contexts/ThemeContext";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <Header />
      <Outlet />
    </div>
  );
}

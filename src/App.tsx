
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./app/page"; // make sure this file exists
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const fontClass = "font-sans"; // adjust or leave blank if not using a font

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className={`${fontClass} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

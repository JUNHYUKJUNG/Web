import { ThemeProvider } from "next-themes";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider attribute="class">
      <Home />
    </ThemeProvider>
  );
};

export default App;

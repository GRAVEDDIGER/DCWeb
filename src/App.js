import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DrawerAppBar from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Builder } from "./pages/builder";

const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#F25C05",
    },
    secondary: {
      main: "#63A1F2",
    },
    background: {
      default: "#F2F2F2",
      paper: "#F2F2F2",
    },
    success: {
      main: "#387CCF",
    },
    error: {
      main: "#F25922",
    },
    warning: {
      main: "#F29E6D",
    },
    info: {
      main: "#63A1F2",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

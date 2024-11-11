import { ThemeProvider, createTheme } from "@mui/material";
import Profile from "./components/Profile.tsx";
import BlogSection from "./components/BlogSection.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F172A",
    },
    secondary: {
      main: "#6366f1",
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <Profile />
          </div>
          <div className="col-span-8">
            <BlogSection />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

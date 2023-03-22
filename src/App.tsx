import { createTheme, ThemeProvider } from "@mui/material/styles";
import QrCodeComponent from "./Components/QrCodeComponent";
import "./styles.css";

const theme = createTheme({
  typography: {
    fontFamily: "Outfit",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <QrCodeComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;

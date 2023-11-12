import BasicButtons from "./BasicButtons";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div style={{ marginTop: "50px" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <BasicButtons />
      <RatingDemo /> */}
        <FormDemo />
      </ThemeProvider>
    </div>
  );
}

export default App;

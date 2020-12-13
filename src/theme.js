import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontWeight: "600",
    },
    h3: {
      fontSize: "2em",
    },
    h4: {
      fontSize: "1.6em",
    },
    h6: {
      fontSize: "1em",
    },
    fontFamily: "Montserrat,sans-serif",
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export default theme;

import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "p",
        body2: "span",
      },
    },
  },
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
    h5: {
      fontSize: "1.4em",
    },
    h6: {
      fontSize: "1em",
    },
    body1: {
      fontSize: "1.2em",
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

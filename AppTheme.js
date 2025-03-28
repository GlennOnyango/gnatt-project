import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    gray?: PaletteOptions["primary"];
    grin?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#425FB4",
      dark: "#343A57",
    },
    secondary: {
      main: "#2E3644",
    },
    error: { main: "#BD4040" },
    gray: {
      main: "#A7A8B9",
      light: "#9FA2B0",
    },
    grin: {
      main: "#6BA247",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: "12px", minHeight: "40px" },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: { spacing: 0, margin: 0, padding: 0 },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: "#343A57",
          fontWeight: "500",
          fontSize: "2rem",
          textAlign: "center",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: { fontSize: "1rem", textAlign: "center" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "18px",
          backgroundColor: "#ECEBF5",
          borderWidth: "2px",
          borderColor: "#FFFFFF",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { color: "#343A57" },
      },
      variants: [
        {
          props: { variant: "body2" },
          style: {
            fontWeight: "bold",
            display: "inline",
            color: "#343A57",
            fontSize: "1rem",
          },
        },
      ],
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "13px",
          backgroundColor: "white",
        },
      },
    },
  },
  typography: {
    fontFamily: ["IBM Plex Sans", "Ubuntu", "sans-serif"].join(","),
    // fontSize: 14,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    button: {
      textTransform: "capitalize",
    },
  },
});

import { createTheme } from "@mui/material";

const projectTheme = createTheme({
  palette: {
    primary: {
      main: "#186EDB",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          width: "100%",
          minWidth: "353px",
          minHeight: "56px",
        },
      },
      variants: [
        {
          props: { color: "secondary" },
          style: {
            textTransform: "none",
            color: `black`,
            border: "1px solid #D8DADC",
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          // width: "100%",
          // minWidth: "353px"
        },
      },
    },
  },
  typography: {
    fontFamily: "Helvetica",
    button: {
      textTransform: "none",
      fontWeight: 400,
      fontSize: "16px",
    },
    h3: {
      fontWeight: 400,
      fontSize: "24px",
    },
    h4: {
      fontWeight: 500,
      fontSize: "16px",
    },
    h5: {
      fontWeight: 400,
      fontSize: "16px",
    },
    caption: {
      fontWeight: 400,
      fontSize: "14px",
    },
  },
});

export default projectTheme;

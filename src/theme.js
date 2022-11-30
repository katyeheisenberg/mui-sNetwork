import { createTheme } from "@mui/material";
import purple from '@mui/material/colors/blue';

export const theme = createTheme({
  palette:{
    primary:{
      main: purple,
      light: purple
    },
    secondary:{
      main: purple,
    },
    otherColor:{
      main:"#999"
    }
  }
})
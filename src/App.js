import React from 'react'
import  Feed  from "./Feed"
import RightBar from "./RightBar";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import { Add } from "./components/Add";
import { createTheme,ThemeProvider } from "@mui/material";


function App() {
  const [mode,setMode] = React.useState('light')
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme = {darkTheme}>
      
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row"  spacing={2} justifyContent="space-between">

      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <RightBar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;

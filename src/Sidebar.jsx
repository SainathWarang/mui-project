import {Switch,ListItem,ListItemIcon,ListItemButton,List,ListItemText, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box p={2}
     sx={{display:{xs:'none',sm:'block'}}}
     flex={1}>
    <Box position="fixed">
    <List >
    <ListItem disablePadding>
    <ListItemButton component="a" href="#home" >
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="HomePage" />
    </ListItemButton>
      </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#pages" >
      <ListItemIcon>
        <FeedIcon />
      </ListItemIcon>
      <ListItemText primary="Pages" />
    </ListItemButton>
      </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#groups" >
      <ListItemIcon>
        <GroupsIcon />
      </ListItemIcon>
      <ListItemText primary="Groups" />
    </ListItemButton>
      </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#marketplace" >
      <ListItemIcon>
        <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary="Marketplace" />
    </ListItemButton>
      </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#friends" >
      <ListItemIcon>
        <Diversity1Icon />
      </ListItemIcon>
      <ListItemText primary="Friends" />
    </ListItemButton>
      </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#setting" >
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Setting" />
    </ListItemButton>
      </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#profile" >
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
      </ListItem>
    <ListItem disablePadding>
    <ListItemButton component="a" href="#profile" >
      <ListItemIcon>
        <DarkModeIcon />
      </ListItemIcon>
      <Switch onChange={e=>setMode(mode === "light" ? 'dark':'light')}/>
    </ListItemButton>
      </ListItem>
   </List>
    </Box>
    </Box>
   
    
  )
}

export default Sidebar
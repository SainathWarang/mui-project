import React from 'react'
import { InputBase } from '@mui/material';
import {Menu,MenuItem,Avatar,AppBar,Box,Badge,styled, Toolbar, Typography} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})

const Search = styled('div')(({theme})=>({
  backgroundColor:'white',
  padding:'0px 10px',
  borderRadius:theme.shape.borderRadius,
  width:'40%',
}))
const Icons= styled(Box)(({theme})=>({
  display:'none',
  alignItems:'center',
  gap:'20px',
  [theme.breakpoints.up('sm')]:{
    display:'flex',

  }
}))
const Userbox = styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  [theme.breakpoints.up('sm')]:{
    display:'none',
  }
}))

const Navbar = () => {
  const [open,setOpen] = React.useState(false)
  return (
    <AppBar position="static">
      <StyledToolbar>
         <Typography
          sx={{display:{xs:'none',sm:'block'},textTransform:'uppercase'}}
         variant="h6"
         >
          Sainath Warang
          </Typography>
          <PetsIcon sx={{display:{xs:'block',sm:'none'}}}/>
         <Search><InputBase placeholder="search..."/></Search>
         <Icons>
         <Badge badgeContent={4} color="error">
         <MailIcon color="action" />
         </Badge>
         <Badge badgeContent={4} color="error">
         <Notifications color="action" />
         </Badge>
         <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
         sx={{width:'30',height:'30'}}
         onClick = {((e) => setOpen(true))}
         />
         </Icons>
         <Userbox onClick = {((e) => setOpen(true))}>
         <Avatar alt="Remy Sharp" 
         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
         sx={{width:'30',height:'30'}}
         />
         <Typography variant = 'span'>Rochelle</Typography>
         </Userbox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
         </AppBar>
  )
}

export default Navbar
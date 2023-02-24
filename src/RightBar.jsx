import {Divider,ListItemText,ListItemAvatar,ListItem,List,ImageListItem,ImageList,AvatarGroup,Avatar,Typography, Box } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box p={2} 
     flex={2}
     sx={{display:{xs:'none',sm:'block'}}}
     >
     <Box position="fixed" width={300}>
      <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
      <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHMlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXMlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
</AvatarGroup>
<Typography mt={2} mb={2} variant="h6" fontWeight={100}>Latest Photos</Typography>
<ImageList cols={3} gap={5} rowHeight={100}>
<ImageListItem>
  <img src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
</ImageListItem>
<ImageListItem>
  <img src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
</ImageListItem>
<ImageListItem>
  <img src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ua2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
</ImageListItem>
</ImageList>
<Typography mt={2}  variant="h6" fontWeight={100}>Latest Conversations</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1603988089669-c041ac2fe196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHMlMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be doing this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95cyUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95cyUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations?'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
     </Box>
      </Box>
  )
}

export default RightBar
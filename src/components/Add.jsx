import React from 'react'
import {ButtonGroup,Button,Stack,TextField,Avatar,styled,Typography,Modal,Box,Fab,Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const StyleModal = styled(Modal)({
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
})
const UserBox = styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:'10px',
  mb:'20px'
  
})



const Add = () => {
  const [open,setOpen] = React.useState(false)
  return (
    <>
 <Tooltip onClick={e=>setOpen(true)} 
  sx={{
    position:'fixed', 
    bottom:20,
    left:{xs:'calc(50%-25px)', md:30},
    }}
    >
 <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyleModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} borderRadius={5} p={3}>
  <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
  <UserBox>
    <Avatar 
    src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    sx={{w:30,h:30}}
    />
    <Typography fontWeight={600} variant="span">Sainath Warang</Typography>
  </UserBox>
  <TextField
          sx={{width:'100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind??"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={2} >
       <EmojiEmotionsIcon color="primary"/>
       <ImageIcon color="secondary"/>
       <VideoCameraBackIcon color="success"/>
       <PersonAddIcon color="error"/>
        </Stack>
      <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
      <Button>Post</Button>
      <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
    </ButtonGroup>
  </Box>
</StyleModal>
    </>
  )
}

export {Add} 
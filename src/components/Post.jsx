import React from 'react'
import {Checkbox,CardContent,CardActions,Typography,CardMedia,IconButton,Card ,Avatar,CardHeader } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Post = () => {
  return (
         <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?b=1&s=170667a&w=0&k=20&c=0FSPkjeK1u_EksXE1VrATh7MD74dnFiVmMmaMhtSYwI="
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" bgcolor={"background.default"} color={"text.primary"}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon ={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export {Post}
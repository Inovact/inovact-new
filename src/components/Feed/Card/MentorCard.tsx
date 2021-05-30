import React from 'react';
import { makeStyles ,createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card,CardHeader,CardMedia,CardContent,CardActions,Collapse,Avatar,IconButton,
  Typography,Box,Button, CardActionArea,Paper,Chip} from '@material-ui/core';
import {BiLike} from 'react-icons/bi';
import {MdAddCircle} from 'react-icons/md';
import {RiUserFollowLine} from 'react-icons/ri';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import image from '../../../assets/avatar.png';

const useStyles = makeStyles((theme) =>
  createStyles({
  root: {
    maxWidth: 300,
    marginLeft:50,
   
    marginTop:40
  },
  cardcontent:{
    padding:'10px',
    margin:10,
    justifyContent:'left',
  },
  name: {
    marginBottom: 5,
    marginLeft:10,
    textAlign:'left'
  },
  cover: {
    width: 60,
    height:60,
  },
  CHcontent:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:20,
  },
  button:{
    marginTop:10,
      },
}));


const RenderMentorCard:React.FC =()=> {
  const classes = useStyles();
  return (
    <Card className={classes.root}> 
      <CardContent className={classes.cardcontent}>
            <Box className={classes.CHcontent} >
              
                      <CardMedia
                      component="img"
                      className={classes.cover}
                      alt="user Image"
                      image={image}
                      title="User Image"
                      />      
           </Box>
           <Box  className={classes.CHcontent} >
           <Typography className={classes.name} color="primary">John Doe</Typography>
                <Typography className={classes.name} color="textSecondary">246 subscribers</Typography>
                <Button variant="outlined" color="primary" className={classes.button}>Request Fund</Button> 
           </Box>
         </CardContent>  
      {/*<CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>*/}

    </Card>
  );
}

export default RenderMentorCard;
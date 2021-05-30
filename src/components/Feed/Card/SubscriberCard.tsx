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
    borderRadius:25,
    marginTop:20
  },
  cardcontent:{
    padding:'20px',
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
    marginTop:20,
    marginBottom:20,
  },
}));


const RenderSubscriberCard:React.FC =()=> {
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
          <CardActions className={classes.CHcontent} >
              <Box>
                <Typography className={classes.name} color="primary">John Doe</Typography>
                <Typography className={classes.name} color="textSecondary">246 subscribers</Typography>
                <Button variant="outlined" color="primary">Subscribe</Button>
              </Box>         
            </CardActions>
        </CardContent>
    </Card>
  );
}

export default RenderSubscriberCard;
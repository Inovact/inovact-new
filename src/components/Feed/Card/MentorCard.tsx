import React from 'react';
import { makeStyles ,createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card,CardHeader,CardMedia,CardContent,CardActions,Collapse,Avatar,IconButton,
  Typography,Box,Button, CardActionArea,Paper,Chip} from '@material-ui/core';
import {mentorDetails} from './../Feed/MenuItemList';


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
    <div>
{ mentorDetails.map((card)=>{
        return(
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
               <Typography className={classes.name} color="primary">{card.name}</Typography>
                    <Typography className={classes.name} color="textSecondary">{card.mentored} Mentored</Typography>
                    <Button variant="outlined" color="primary" className={classes.button}>Request Mentoring</Button> 
               </Box>
             </CardContent>  
        </Card>
        );
      })
    }
    </div>
  
  );
}

export default RenderMentorCard;
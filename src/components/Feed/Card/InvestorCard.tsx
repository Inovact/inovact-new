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
    textAlign:'center'
  },
  cover: {
    width: 80,
    height:80,
  },
  CHcontent:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    marginTop:20,
    marginBottom:20,
  },
  button:{
marginTop:10,
  },
}));


const RenderInvestorCard:React.FC =()=> {
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
                <Typography className={classes.name} color="primary">Company or Investor name</Typography>
                <Typography className={classes.name} color="textSecondary">Projects invested </Typography>
                <Button variant="outlined" color="primary" className={classes.button}>Request Fund</Button> 
              </Box>   
                
            </CardActions>
        </CardContent>
    </Card>
  );
}

export default RenderInvestorCard;
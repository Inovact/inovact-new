import React from 'react';
import {Card,CardMedia,CardContent,Typography,Grid,Paper,Box,Button,CardActions} from '@material-ui/core';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { profileDetails } from '../Feed/MenuItemList';

import phone from './../../../assets/phone.png';
import mail from './../../../assets/mail.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    cover: {
        width: 100,
        height:100,
        marginTop:30,
        marginLeft:100,
      },
      heading:{
        color:'#020652',
        fontSize:'14px',
      },
      card:{
        marginTop:'30px',
        justifyContent:'center',
        maxWidth:450,
        marginLeft:30,
        backdropFilter: "blur(50px)",
        backgroundColor:'rgba(5,6,82,0.1)'
      },
      papers:{
        width:'250px'
      },
      buttonP:{
        marginTop:30,
        padding:10,
      },
      follow:{
        marginTop:20,
        paddingLeft:10,
      },
      email:{
        color:'#020652',
        fontSize:'14px',
      },
      imgs:{
width:'30px',
marginRight:'5px',
      },
      round:{
        padding:'20px', 
      },
      number:{
        fontWeight:550,
        fontSize:'18px',
      }
  }));

const ProfileSidebar= ()=>
{
const classes=useStyles();
    return(
<div>
  {profileDetails.map((card)=>{
    return(
<Card className={classes.card} >
        <CardMedia
          component="img"
          className={classes.cover}
          alt="Image"
          image="https://images.unsplash.com/photo-1617187735632-727b180e432d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Image"
         />
   
      <CardContent>
          <Typography variant="h6" color="textPrimary">
         {card.name}
          </Typography>
      <CardActions>
          <Paper className={classes.papers}>
              <Grid container   
                  direction="row"
                  justify="center"
                  alignItems="center" > 
                    <Grid container xs={12} className={classes.round}>
                    <img src={mail} className={classes.imgs} />
                        <Typography  variant="h6"  className={classes.email}>{card.email}  </Typography>   
                    </Grid>

                    <Grid container xs={12} className={classes.round}>
                    <img src={phone} className={classes.imgs} />
                        <Typography  variant="h6"  className={classes.email}>{card.ph} </Typography>   
                    </Grid>
                    
                    <Grid item xs={4} className={classes.round}>
                        <Box className={classes.number}> {card.followers}</Box>
                        <Typography  variant="h6"  className={classes.heading}>Followers</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Box className={classes.number}>{card.projects}</Box>
                        <Typography  variant="h6"  className={classes.heading}>Projects </Typography>
                    </Grid>

                    <Grid item xs={4}> 
                        <Box className={classes.number}> {card.following}</Box>
                        <Typography  variant="h6" className={classes.heading}>Following</Typography>
                    </Grid>
                </Grid>
          </Paper>
        </CardActions>
   
          <Box>
              <Button variant="contained" color="primary" className={classes.buttonP} href="/myprofile">
                        Go to Profile
              </Button>
          </Box>
      </CardContent>
   </Card>
    );
  })}
</div>

    );
}
export default ProfileSidebar;
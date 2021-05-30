import React from 'react';
import {Grid,Paper,Card,CardContent, Typography,Box,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../../assets/temp.jpeg';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
const useStyles = makeStyles((theme) => ({
    img:{
       
    },
    des:{
textAlign:'left',
borderRight:'2px solid #ffa500'
    },
    heading:{
        fontWeight:500,
        fontSize:'16px',
        marginTop:10,
      },
      number:{
        fontWeight:600,
        fontSize:'18px',
      },
      card:{
         boxShadow:'6px 10px 6px rgba(0,0,0,0.2)',
      },
      avatars:{
       
      },
  }));
const Profile =()=>{
    const classes=useStyles();
    return(
        <div>
            <Paper style={{marginTop:'30px'}}>
                <Card className={classes.card}>
                    <Grid container spacing={2}>

                        <Grid item sm={3} md={2} className={classes.img}>
                        <img src={image} style={{borderRadius:"5%"}} width="100%" height="100%"/>
                        </Grid> 

                        <Grid item sm={6} md={5} className={classes.des} >
                            <Typography variant="h6">Name</Typography>
                                <Typography paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae 
                                    elementum curabitur. 
                                </Typography>
                        </Grid>

                        <Grid item sm={3} md={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid  item xs={4}>
                                    <Typography  variant="h6"  color="textSecondary" className={classes.heading}>Followers </Typography>
                                    <Box> 112</Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography  variant="h6"   color="textSecondary" className={classes.heading}>Projects </Typography>
                                    <Box>45</Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography  variant="h6"   color="textSecondary" className={classes.heading}>Activitu </Typography>
                                    <Box>4:45pm</Box>
                                </Grid>
                                
                            </Grid>
                            </Grid>
                          
                            <Grid item xs={6}>
                                <Typography paragraph>Hi im so cool</Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <Box className={classes.avatars}>
                                        <AvatarGroup max={4}>
                                        <Avatar alt="Remy Sharp" src={image} />
                                        <Avatar alt="Travis Howard" src={image} />
                                        <Avatar alt="Cindy Baker" src={image}/>
                                        <Avatar alt="Agnes Walker"src={image} />
                                        <Avatar alt="Trevor Henderson" src={image} />
                                        </AvatarGroup>
                                    </Box>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>    
            </Paper>
           
        </div>
    )
}
export default Profile;
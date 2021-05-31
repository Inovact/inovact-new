import React from 'react';
import {Grid,Paper,Card,CardContent, Typography,Box,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../../assets/temp.jpeg';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {myProject} from './../Feed/MenuItemList';
const useStyles = makeStyles((theme) => ({
    gridii:{
        height:'150px',
    },
    img:{
       
    },
    des:{
    textAlign:'left',
   // height:'300px',
    borderRight:'2px solid gray'
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
        maxHeight:'300px',
        height:'150px',
        boxShadow:'6px 10px 6px rgba(0,0,0,0.2)',
    },
      avatars:{
       
      },
  }));
const Profile =()=>{
    const classes=useStyles();
    return(
        <div >
            {myProject.map((card)=>{
                return(
            <Paper style={{marginTop:'30px'}} className={classes.gridii}>
                <Card className={classes.card}>
                    <Grid container spacing={2} className={classes.gridii}>

                        <Grid item sm={3} md={2} className={classes.img}>
                        <img src={card.src} style={{borderRadius:"5%"}} width="100%" height="100%"/>
                        </Grid> 

                        <Grid item sm={6} md={5} className={classes.des} >
                            <Typography variant="h6">Name</Typography>
                                <Typography paragraph>
                                  {card.description1}
                                </Typography>
                        </Grid>

                        <Grid item sm={3} md={5}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid  item xs={4}>
                                    <Typography  variant="h6"  color="textSecondary" className={classes.heading}>Followers </Typography>
                                    <Box> {card.followers}</Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography  variant="h6"   color="textSecondary" className={classes.heading}>Projects </Typography>
                                    <Box>{card.following}</Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography  variant="h6"   color="textSecondary" className={classes.heading}>Activity </Typography>
                                    <Box>{card.projects}</Box>
                                </Grid>
                                
                            </Grid>
                            </Grid>
                          
                            <Grid item xs={6}>
                                <Typography paragraph>{card.description2}</Typography>
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
                );
            })}
           
        </div>
    )
}
export default Profile;
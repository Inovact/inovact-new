import React from 'react';
import {Grid,Paper,Card,CardContent, Typography,Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../../assets/temp.jpeg';

const useStyles = makeStyles((theme) => ({
    img:{
        width:'100%',
        height:'auto',
    },
    heading:{
        fontWeight:600,
        fontSize:'18px',
        marginTop:'30px'
      },
  }));
const Profile =()=>{
    const classes=useStyles();
    return(
        <div>
            <Paper>
                <Grid container spacing={2}>
                    <Grid item sm={6} className={classes.img}>
                     <img src={image} style={{borderRadius:"50%"}} />
                    </Grid>

                    <Grid item sm={6}>
                        <Card>
                        <CardContent>
                            <Typography variant="h3">Name</Typography>
                            <Typography component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. 
                            </Typography>
                            <Grid container > 
                                <Grid xs={4}>
                                    <Typography  variant="h6"  className={classes.heading}>Followers </Typography>
                                    <Box> 112</Box>
                                </Grid>
                                <Grid xs={4}>
                                    <Typography  variant="h6"  className={classes.heading}>Projects </Typography>
                                    <Box>45</Box>
                                </Grid>
                                <Grid xs={4}>
                                    <Typography  variant="h6" className={classes.heading}>Ideas</Typography>
                                    <Box> 98</Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                        </Card> 
                    </Grid>
                </Grid>
              
            </Paper>
           
        </div>
    )
}
export default Profile;
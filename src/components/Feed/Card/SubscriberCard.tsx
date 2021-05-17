import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Button, Grid,Box,Typography} from '@material-ui/core';
import {BiLike} from 'react-icons/bi';
import {MdAddCircle} from 'react-icons/md';
import {RiUserFollowLine} from 'react-icons/ri';
import {TiCancel} from 'react-icons/ti';
import image from '../../../assets/temp.jpeg';


const subscriberDetails:Subscribee[]=[
  {
   "id": 1,
   "name": 'John Doe',
   "projects":34,
   "ideas":78,
   "subscribers":112,
},
 {
   "id": 1,
 "name": 'John Doe',
 "projects":34,
 "ideas":78,
 "subscribers":112,
 },
{"id": 1,

"name": 'John Doe',
"projects":34,
"ideas":78,
"subscribers":112,
},
]

type Subscribee={
 id?:string |number;
 name:string;
 projects:number;
 ideas:number;
 subscribers:number;
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: '#020652',
  },
  heading:{
    fontWeight:600,
    fontSize:'18px',
  }
}));

const RenderCard:React.FC<{data:Subscribee}> =({data})=> {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{flexDirection: 'row-reverse'}}>
      <CardHeader
      title={data.name}
      subheader="September 14, 2016"
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
            <Grid container > 
                <Grid xs={4}>
                    <Typography  variant="h6"  className={classes.heading}>Followers </Typography>
                    <Box>  {data.subscribers}</Box>
                </Grid>
                <Grid xs={4}>
                    <Typography  variant="h6"  className={classes.heading}>Projects </Typography>
                    <Box>{data.projects}</Box>
                </Grid>
                <Grid xs={4}>
                    <Typography  variant="h6" className={classes.heading}>Ideas</Typography>
                    <Box>  {data.ideas}</Box>
                </Grid>
            </Grid>
      </CardContent>

      <CardActions disableSpacing style={{flexDirection: 'row-reverse',justifyContent:'center'}}>
          <Button 
          variant="contained"  
          size="large" 
          color="secondary" 
          style={{justifyContent:'center',alignItems:'center'}}>
                 Subscribe
          </Button>
      </CardActions>
    </Card>
  );
}
const AllSubscriberCard =()=>{
  const classes=useStyles();
  {subscriberDetails.map((data)=>{   
      return(     
      <Box id="#allsubscribers">  
              <RenderCard data={data}/>   
      </Box> 
  );
})}
}
export default AllSubscriberCard;
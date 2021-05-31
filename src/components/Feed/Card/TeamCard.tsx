import React from 'react';
import { makeStyles ,createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card,CardHeader,CardMedia,CardContent,CardActions,Collapse,Avatar,IconButton,
        Typography,Box,Button, CardActionArea,Paper,Chip} from '@material-ui/core';
        import add from './../../../assets/add.png';
        import like from './../../../assets/like.png';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {teamDetails} from './../Feed/MenuItemList';
import image from '../../../assets/avatar.png';

const useStyles = makeStyles((theme) =>
  createStyles({
  root: {
    maxWidth: 400,
    marginLeft:'0px',
    margin:'0px',
    padding:'0px',
    borderRadius:5,
    marginTop:10,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 700,
      marginLeft:50,
      marginTop:20,
      borderRadius:25,
     }
  },
  imgs:{
    width:'30px',
    },    
  cardcontent:{
   padding:'5px',
   margin:'10px',
     justifyContent:'left',
    [theme.breakpoints.up('sm')]: {
      margin:10,
      padding:'20px',
     } 
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor:'#020652',
  },
  pos: {
    marginBottom: 5,
    marginLeft:10,
    textAlign:'left'
  },
  cover: {
    width: 30,
    height:30,
    [theme.breakpoints.up('sm')]:{
      width: 60,
      height:60,
    },
  },

  titleP:{
    fontSize:'18px',
    textAlign:'left',
    fontWeight:600,
    textTransform:'none',
    [theme.breakpoints.up('sm')]:{
    fontSize:'24px',
    }
  },
  CHcontent:{
    display:'flex',
    flexDirection:'row',
    marginTop:20,
    marginBottom:20,
  },
  left:{
    display:'flex',
    flexDirection:'row',
  },
  right:{
  [theme.breakpoints.up('sm')]:{
    marginLeft:350,
   },
  },
  chip:{
  display:'none',
  justifyContent: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: theme.spacing(0.5),
  margin: 5,
  [theme.breakpoints.up('sm')]:{
    display: 'flex',
  },
 },
  everyChip:{
  margin:2,
  [theme.breakpoints.up('sm')]:{
  margin:4,
  },
 },
 avatars:{
   paddingLeft:'30px',
  marginLeft:150,
 },
 description1:{
   textAlign:'left',
 }
}));
interface ChipData {
  key: number;
  label: string;
}
interface TeamCards{
  id?:number;
  title:string;
  name:string;
  image?:string;
  description:string;
  isComplete:boolean;
};


const RenderTeamCard:React.FC =()=> {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' }
  ]);

  return (
   <div>
     {teamDetails.map((card)=>{
    return(
    <Card className={classes.root}>  
     <CardContent className={classes.cardcontent}>
      <div className="headerCard">
          <Typography variant="h4" className={classes.titleP} >{card.title}</Typography> 
            <Box className={classes.CHcontent} >
                  <Box className={classes.left}>
                        <CardMedia
                        component="img"
                        className={classes.cover}
                        alt="user Image"
                        image={image}
                        title="User Image"
                        />
                      <Box>
                          <Typography className={classes.pos} color="primary">
                          {card.name}
                          </Typography>
                          <Typography className={classes.pos} color="textSecondary">
                            <a>Follow</a>
                          </Typography>
                        </Box>  
                  </Box>
                  <Box className={ classes.right}>
                        <IconButton aria-label="settings">
                        <img src={add} className={classes.imgs} />
                        </IconButton>
                  </Box> 
              </Box>
        </div> 
        <Box>        
            <Typography paragraph className={classes.description1}>
             {card.description}
            </Typography>
        </Box>

        <CardActions className={classes.CHcontent} >
            <Box>
                <IconButton  aria-label="add to favorites">
                <img src={like} className={classes.imgs} />
              </IconButton>
            </Box>
        
            <Box component="ul" className={classes.chip}>
                  {chipData.map((data) => {
                  return (
                  <li key={data.key}>
                  <Chip className={classes.everyChip}
                   color="primary"
                   size="small"
                   variant="outlined"
                  label={data.label}
                  />
                  </li>
                  );
                  })}
             </Box>
            <Box className={classes.avatars}>
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src={image} />
                  <Avatar alt="Travis Howard" src={image} />
                  <Avatar alt="Cindy Baker" src={image}/>
                  <Avatar alt="Agnes Walker"src={image} />
                  <Avatar alt="Trevor Henderson" src={image} />
                </AvatarGroup>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
        );
      })}
    </div>
  );
}

export default RenderTeamCard;
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
    maxWidth: 700,
    marginLeft:50,
    borderRadius:25,
    marginTop:20
  },

  cardcontent:{
    padding:'20px',
    margin:10,
    justifyContent:'left',
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
    width: 60,
    height:60,
  },

  titleP:{
 textAlign:'left',
 fontWeight:600,
 textTransform:'none',
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
marginLeft:350,
  },
 chip:{
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: theme.spacing(0.5),
  margin: 5,

 },
 everyChip:{
margin:5,
 },
 avatars:{
   paddingLeft:'30px',
marginLeft:150,
 },
}));
interface ChipData {
  key: number;
  label: string;
}
type Proj={
  id?:string |number;
  name:string;
  image?:string;
  description:string;
  isComplete:boolean;
  data?:Proj;
};
const projectDetails:Proj={
  "id": 1,
  "description":'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  "name": 'John Doe',
  "isComplete":true,
  "image":"../../../assets/temp.jpeg"
  }

const RenderIdeaCard:React.FC =()=> {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
  
  ]);
  return (
    <Card className={classes.root}>
    
      <CardContent className={classes.cardcontent}>
      <div className="headerCard">
          <Typography variant="h4" className={classes.titleP} >Title of the Idea</Typography> 
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
                        John Doe
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        <a>Follow</a>
                      </Typography>
                      </Box>  
                </Box>
                <Box className={ classes.right}>
                      <IconButton aria-label="settings">
                           <MdAddCircle />
                      </IconButton>
                </Box>
            
        </Box>
    </div>
       
        
          <Box>        
              <Typography paragraph >
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
          </Box>
  
          <CardActions className={classes.CHcontent} >
           
              <Box>
                  <IconButton  aria-label="add to favorites">
                      <BiLike />
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
}

export default RenderIdeaCard;
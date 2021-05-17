import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card,CardHeader,CardMedia,CardContent,CardActions,Collapse,Avatar,IconButton,Typography,Box,Button} from '@material-ui/core';

import {BiLike} from 'react-icons/bi';
import {MdAddCircle} from 'react-icons/md';
import {RiUserFollowLine} from 'react-icons/ri';

import image from '../../../assets/temp.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor:'#020652',
  },
}));

type Proj={
  id?:string |number;
  name:string;
  image?:string;
  description:string;
  isComplete:boolean;
  data?:Proj;
};
const projectDetails:Proj[] =[
  {"id": 1,
  "description":'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  "name": 'John Doe',
  "isComplete":true,
  },
  {"id": 2,
  "description":'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  "name": 'J Doe',
  "isComplete":true,
  },
  {"id": 3,
  "description":'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
  "name": 'John Doe',
  "isComplete":true,
  },
]

const RenderProjectCard:React.FC<{data:Proj}>  =({data})=> {
  const classes = useStyles();
    {/*} const [icon, setIcon] = React.useState(<BiLike />);

      const handleonClick = () => {
        setIcon(<RiUserFollowLine/>)
      };
    */}

  return (
   
    <Card className={classes.root} style={{flexDirection: 'row-reverse',}}>
      <CardHeader style={{flexDirection: 'row-reverse',fontWeight:600,}}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={       
          <IconButton aria-label="settings">
            <MdAddCircle />
           {/*   {(props.isComplete==true)?  <MdAddCircle />:<TiCancel />}*/}
          </IconButton>
        }
        title= {data.name}
       
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        
        <Typography variant="body2" color="textSecondary" component="p">
         {data.description}
        </Typography>
      </CardContent>

      <CardActions style={{flexDirection: 'row-reverse'}}>
        <IconButton  aria-label="add to favorites">
          <BiLike />
        </IconButton>

        <IconButton aria-label="share">
        <RiUserFollowLine />
        </IconButton>

        <IconButton aria-label="share"  style={{position:'relative',left:'80px',}}>
          <Button  variant="contained" size="small" color="primary" >
             Learn More
          </Button>
          </IconButton>
      </CardActions>
    </Card>
  );
}

export default RenderProjectCard;
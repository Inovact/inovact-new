import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Button,Box,Grid} from '@material-ui/core';
import {BiLike} from 'react-icons/bi';
import {MdAddCircle} from 'react-icons/md';
import {RiUserFollowLine} from 'react-icons/ri';
import image from '../../../assets/temp.jpeg';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
  top:{
    background:'primary',

  },
  paper:{
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 3),
    position:'relative',
    left:'80%',
    top:'5%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
    width:'500px',
    height:'600px',
    border:'none',
  },
}));

type Ideas={
  id?:string |number;
  name:string;
  description:string;
  isComplete:boolean;
  tojoin:boolean;
};
const ideaDetails:Ideas[]=[
  {
    "id": 1,
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet pharetra ipsum, in interdum leo vestibulum in. Donec varius turpis maximus, posuere nisl quis, efficitur mi. Donec arcu risus, gravida aliquam pulvinar quis, malesuada sed augue. Etiam tincidunt dapibus pharetra. Donec velit urna, cursus id nisi sit amet, consectetur dignissim nisl. Aenean et dolor pulvinar, venenatis lacus eu, cursus ex. Curabitur eu felis vel leo efficitur congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pretium sapien eget tellus lacinia, sed gravida sem dapibus. In varius mi id lorem feugiat, in pretium lacus aliquet. Aenean vestibulum risus a orci congue tempor. Curabitur et eros nec nisi pulvinar venenatis a vel urna. Integer semper efficitur mi vel porttitor. Cras condimentum.',
    "name": 'John Doe',
    "isComplete":true,
    "tojoin":true,
  },
  {
    "id": 1,
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet pharetra ipsum, in interdum leo vestibulum in. Donec varius turpis maximus, posuere nisl quis, efficitur mi. Donec arcu risus, gravida aliquam pulvinar quis, malesuada sed augue. Etiam tincidunt dapibus pharetra. Donec velit urna, cursus id nisi sit amet, consectetur dignissim nisl. Aenean et dolor pulvinar, venenatis lacus eu, cursus ex. Curabitur eu felis vel leo efficitur congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pretium sapien eget tellus lacinia, sed gravida sem dapibus. In varius mi id lorem feugiat, in pretium lacus aliquet. Aenean vestibulum risus a orci congue tempor. Curabitur et eros nec nisi pulvinar venenatis a vel urna. Integer semper efficitur mi vel porttitor. Cras condimentum.',
    "name": 'John Doe',
    "isComplete":true,
    "tojoin":true,
  },
  {
    "id": 1,
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet pharetra ipsum, in interdum leo vestibulum in. Donec varius turpis maximus, posuere nisl quis, efficitur mi. Donec arcu risus, gravida aliquam pulvinar quis, malesuada sed augue. Etiam tincidunt dapibus pharetra. Donec velit urna, cursus id nisi sit amet, consectetur dignissim nisl. Aenean et dolor pulvinar, venenatis lacus eu, cursus ex. Curabitur eu felis vel leo efficitur congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pretium sapien eget tellus lacinia, sed gravida sem dapibus. In varius mi id lorem feugiat, in pretium lacus aliquet. Aenean vestibulum risus a orci congue tempor. Curabitur et eros nec nisi pulvinar venenatis a vel urna. Integer semper efficitur mi vel porttitor. Cras condimentum.',
    "name": 'John Doe',
    "isComplete":true,
    "tojoin":true,
  },
];
 

const RenderCard:React.FC<{data:Ideas}>  =({data})=> {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
   <>
    <Card className={classes.root}>
      <CardHeader style={{flexDirection: 'row-reverse',}}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={       
          <IconButton aria-label="settings">
            <MdAddCircle />
          </IconButton>
        }
        title= {data.name}
  
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet pharetra Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet pharetra
        </Typography>
      </CardContent>

      <CardActions style={{flexDirection: 'row-reverse'}}>
        <IconButton  aria-label="add to favorites">
          <BiLike />
        </IconButton>

        <IconButton aria-label="share">
        <RiUserFollowLine />
        </IconButton>

        <IconButton aria-label="share" style={{position:'relative',left:'80px',}}>
          <Button  variant="outlined" size="small" color="primary" onClick={handleOpen} >
             Learn More
          </Button>
          </IconButton>
      </CardActions>
    </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
      }}>
           <Fade in={open}>
              <div className={classes.paper}>
                    <Box className={classes.top}>
                          <Typography variant="h6"> {data.name}</Typography>
                    </Box>
                
                    <Card>
                    <CardContent>
                        <Typography  component="p">
                        {data.description}
                        </Typography>
                      </CardContent>
                      <CardActions style={{flexDirection: 'row-reverse',justifyContent:'center'}}>
                            <IconButton  aria-label="add to favorites">
                              <BiLike />
                            </IconButton>
                            <IconButton aria-label="share">
                            <RiUserFollowLine />
                            </IconButton>
                        
                            <IconButton aria-label="settings">
                            <MdAddCircle />
                          </IconButton>
                            </CardActions>
                          </Card>
              </div>
        </Fade>
      </Modal>
  </>
  );
}
const AllIdeaCard =()=>{
  const classes=useStyles();
  {ideaDetails.map((data)=>{   
      return(     
      <Box id="#allideas">  
              <RenderCard data={data}/>   
      </Box> 
  );
})}
}
export default AllIdeaCard;
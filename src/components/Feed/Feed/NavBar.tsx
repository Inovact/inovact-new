import React from 'react';
import {Link} from 'react-router-dom';
import logo from './../../../assets/logo.png';
import {Container, Grid,Paper,Box,Tabs,Tab, CardMedia,Drawer,Card,CardContent,
        AppBar,Toolbar,CssBaseline,List,Badge,Button,Typography,
        Divider,IconButton,ListItem, ListItemIcon,ListItemText} from '@material-ui/core'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import GlassCard from './GlassCard';
import ProfileSideBar from '../Card/ProfileCard';
import SwipeableViews from 'react-swipeable-views';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { IoIosNotifications } from 'react-icons/io';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


import image from '../../../assets/temp.jpeg';
import RenderMentorCard from './../Card/MentorCard';
import RenderProjectCard from './../Card/ProjectCard';
import RenderIdeaCard from './../Card/IdeaCard';
import RenderTeamCard from './../Card/TeamCard';
import RenderSubscriberCard from './../Card/SubscriberCard';
import RenderInvestorCard from './../Card/InvestorCard';

const drawerWidth = 280;
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props; 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} >
          <Typography style={{overflow:'hidden'}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '&.MuiListItem-root.Mui-selected':{
      '&:hover':{
      background:'white',
      borderRight: '4px solid #020652',
      }
    },
    listitemsicon:{
      borderRadius:'50%',
      //background:'rgba(0,0,0,0.3)',
      padding:10,
      marginLeft:10,
     // color:'white',
      width:'40px',
      height:'40px'
    },
    logoname:{
      marginLeft:'20px',
      marginTop:'10px',
    },
selected:{
  background:'white',
  borderRight: '4px solid #020652',
},
    listitems:{
     padding:12,
     paddingLeft:30,
      '&:hover':{
        background:'white',
        borderRight: '4px solid #020652',
      },
      '& .selected':{
        background:'white',
        borderRight: '4px solid #020652',
      }
    },
    listitems2:{
      padding:12,
      '&:hover':{
        borderRight: '4px solid #FFA500',
       background:'white',
      }
    },
    buttonP:{
      width:'240px',
      padding:10,
    },
    listitemstext:{
      fontSize:'16px'
    },
    menus:{
    justifyContent:'right',
    minWidth:60,
    },
    header:{
      justifyContent:'left',
      color:'#ffa500'
    },
    tabcontent:{
      overflow:'hidden',
      justifyContent:'center',
      marginLeft:30
,    },
tabconten:{
  overflow:'hidden',
  marginLeft:30
   },
    appBar: {
      zIndex: theme.zIndex.drawer + 1, 
      margin:'-1px',
      position:'relative',
      left:'-1px',
      width:'100%',
    },
    inovact:{
     position:'relative',
     left:'-80px',
    },
    tabsAll:{ 
      marginLeft:'300px',
      paddingLeft:'120px',
    },
    tabI:{
          color:'#FFA500',
          fontSize:'12px',
          fontWeight:600,
          minWidth: 100, 
          width: 100
    },
    drawer: {
     // width: drawerWidth,
      //flexShrink: 0,
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
       background:'transparent',
     // backdropFilter: "blur(50px)",
     // backgroundColor:'rgba(5,6,82,0.1)'
    
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'center',
    },
    drawerContainer: {
      overflow: 'hidden',
    },
    content: {
      flexGrow: 1,
      overflow: 'hidden',
      marginLeft:150,
      padding: theme.spacing(3),
    },
  }),
 
);
function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function NavBar() {

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const [value, setValue] = React.useState(0);

  const menuId = 'menuID';

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  return (
    <GlassCard>  
    <div className={classes.header}>
    
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
                <img src={logo} width="50px" height="50px" />
                <Typography variant="h4" className={classes.logoname} color="secondary" >Inovact</Typography>
      
          <div className={classes.menus}>
        
           <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"  
                className={classes.tabsAll}        
            >
              <Tab label="Projects" {...a11yProps(0)} className={classes.tabI} />
              <Tab label="Ideas" {...a11yProps(1)} className={classes.tabI} />
              <Tab label="Teams" {...a11yProps(2)} className={classes.tabI}/>
              <Tab label="Mentor" {...a11yProps(3)} className={classes.tabI} />
              <Tab label="Investors" {...a11yProps(4)} className={classes.tabI}/>
              <Tab label="TTP" {...a11yProps(5)} className={classes.tabI}/>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <IoIosNotifications />
        </Badge>
        </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
          >     
              <AccountCircle />
          </IconButton>
        </Tabs>  
        </div> 
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <List >
      <ListItem className={classes.listitems} button   selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem className={classes.listitems} button   selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}> 
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="My Projects"  />
      </ListItem>
      <ListItem className={classes.listitems} button   selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="My Ideas" />
      </ListItem>
     <ListItem className={classes.listitems} button>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Subscribe" />
      </ListItem>
      <Divider />
       <ListItem className={classes.listitems} button onClick={handleClick} >
        
        <ListItemText primary="Team" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.listitems} button   selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Team 1" secondary="Admin" />
      </ListItem>
       <ListItem className={classes.listitems} button   selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Team 2" secondary="Colaborator" />
      </ListItem>
        </List>
      </Collapse>
    </List>
       
        <Button variant="outlined" color="primary" className={classes.buttonP} >
             Join New Team
        </Button> 
        </div>
      </Drawer>
   
      <main
        className={classes.content}
      >
        <div  />
        <Container >            
                    
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex} style={{overflow:'hidden'}}
                    >
                            <TabPanel  value={value} index={0} dir={theme.direction} >
                              <Container  className={classes.tabcontent} id="home">
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={8}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                   
                                  >
                                  <Grid item sm={12} >
                                  <RenderProjectCard />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <RenderProjectCard />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <RenderProjectCard />
                                  </Grid>
                                  </Grid>
                                 
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                      <ProfileSideBar />
                                </Grid>
                              </Grid>
                              
                              </Container>
                              
                               
                              
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                   
                            <Container  className={classes.tabcontent}>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={8}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                   
                                  >
                                  <Grid item sm={12} >
                                  <RenderIdeaCard />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <RenderIdeaCard />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <RenderIdeaCard />
                                  </Grid>
                                  </Grid>
                                 
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                      <ProfileSideBar />
                                </Grid>
                              </Grid>
                            </Container>
                              
                               
                            </TabPanel>
                            
                            <TabPanel value={value} index={2} dir={theme.direction}>
                            <Container  className={classes.tabcontent}>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={8}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                   
                                  >
                                  <Grid item sm={12} >
                                  <RenderTeamCard />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <RenderTeamCard />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <RenderTeamCard />
                                  </Grid>
                                  </Grid>
                                 
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                      <ProfileSideBar />
                                </Grid>
                              </Grid>
                            </Container>
                              
                            </TabPanel>
                            <TabPanel value={value} index={3} dir={theme.direction}>
                            <Container  className={classes.tabcontent}>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={8}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                   
                                  >
                                    <Grid item xs={12} md={6}>
                                      <RenderMentorCard />
                                    </Grid>
                                  <Grid item xs={12} md={6}>
                                  <RenderMentorCard />
                                    </Grid>
                                      <Grid item xs={12} md={6}>
                                      <RenderMentorCard />
                                    </Grid>
                                      <Grid item xs={12} md={6}>
                                      <RenderMentorCard />
                                    </Grid>
                                  </Grid>
                                 
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                      <ProfileSideBar />
                                </Grid>
                              </Grid>
                            </Container>
                              
                            </TabPanel>

                            <TabPanel value={value} index={4} dir={theme.direction}>
                            <Container  className={classes.tabcontent}>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={8}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                   
                                  >
                                    <Grid item xs={12} md={6}>
                                      <RenderInvestorCard />
                                    </Grid>
                                  <Grid item xs={12} md={6}>
                                      <RenderInvestorCard />
                                    </Grid>
                                      <Grid item xs={12} md={6}>
                                      <RenderInvestorCard />
                                    </Grid>
                                      <Grid item xs={12} md={6}>
                                      <RenderInvestorCard />
                                    </Grid>
                                  </Grid>
                                 
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                      <ProfileSideBar />
                                </Grid>
                              </Grid>
                            </Container>
                              
                            </TabPanel>
                            <TabPanel value={value} index={5} dir={theme.direction}>
                                  NO IDEA
                            </TabPanel>
                    </SwipeableViews>
                  
            </Container>   
      </main>
    </div>
    </GlassCard>
  );
}

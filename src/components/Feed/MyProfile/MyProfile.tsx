import React from 'react';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import {Tab,Tabs,Box,Badge} from '@material-ui/core';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {Grid,Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
import Profile from './Profile';
const drawerWidth = 240;
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    listitems:{
      padding:12,
      paddingLeft:30,
       '&:hover':{
         background:'white',
         borderRight: '4px solid #020652',
       },
       ' &.selected':{
         background:'white',
         borderRight: '4px solid #020652',
       }
     },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menus:{
      justifyContent:'right',
      minWidth:60,
      },
    menuButton: {
      marginRight: theme.spacing(2),
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
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
    
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function MyProfile() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [value, setValue] = React.useState(0);

  const menuId = 'menuID';

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
               <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            Inovact
          </Typography>
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
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
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
       <ListItem className={classes.listitems} button  >
        
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
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container>
        <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                   spacing={3}
                                  >
                                      <Grid item sm={12} >
                                  <Profile />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <Profile />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <Profile />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <Profile />
                                  </Grid>
                                  <Grid item sm={12} >
                                  <Profile />
                                  </Grid>
        </Grid>
        </Container>
       
      </main>
     </div>
  );
}

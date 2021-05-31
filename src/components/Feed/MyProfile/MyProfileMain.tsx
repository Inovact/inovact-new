import React from 'react';
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './../../../assets/logo.png';
import {Container, Grid,Paper,Box,Tabs,Tab, CardMedia,Drawer,Card,CardContent,
        AppBar,Toolbar,CssBaseline,List,Badge,Button,Typography,
        Divider,IconButton,ListItem, ListItemIcon,ListItemText} from '@material-ui/core'
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import GlassCard from './../Feed/GlassCard';
import Collapse from '@material-ui/core/Collapse';
import Profile from './Profile';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuComp from './../Feed/MenuComp';
import { sidebarData,teamlist} from './../Feed/MenuItemList';

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
    listitemsicon:{
      borderRadius:'50%',
      padding:10,
      marginLeft:10,
      width:'40px',
      height:'40px'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(2, 0, 0, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    logoname:{
      [theme.breakpoints.up('sm')]: {
        marginLeft:'-20px',
        marginTop:'10px',
      },
    },
    ig:{

    [theme.breakpoints.up('sm')]: {
      marginLeft:'-30px',
      marginRight:'10px',
    },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
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
    buttonP:{
      width:'240px',
      padding:10,
    },
    listitemstext:{
      fontSize:'16px'
    },
    menus:{
      display:'flex',
      flexDirection:'row',
    justifyContent:'right',
     minWidth:60,
    },
    grid1:{

    },
    grid2:{

    },
    header:{
      justifyContent:'left',
      color:'black',
      
    },
    tabcontent:{
      overflow:'hidden',
      justifyContent:'center',
      marginLeft:0,
      [theme.breakpoints.up('sm')]: {
        marginLeft:30,
          }
,    },
    tabconten:{
      overflow:'hidden',
      marginLeft:0,
      [theme.breakpoints.up('sm')]: {
        marginLeft:30,
              },
      },
    appBar: {
      zIndex: theme.zIndex.drawer + 5, 
      margin:'-1px',
      position:'relative',
      left:'-1px',
      width:'100%',
      padding:'0px',
      boxShadow:'none',
      background:'transparent',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    inovact:{
     position:'relative',
     left:'-80px',
    },
    tabsAll:{ 
      marginLeft:'60px',
      paddingLeft:'40px',
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    tabI:{
        
          fontSize:'12px',
          fontWeight:600,
          minWidth: 100, 
          width: 100
    },
    drawer: {
      marginTop:'40px',
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        marginTop:'40px',
      },
    },
    drawerPaper: {
      width: drawerWidth,
      background:'white',
      [theme.breakpoints.up('sm')]: {
        background:'transparent',
      }
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'center',
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      overflow: 'hidden',
      marginLeft:0,
      padding:'0px',
      [theme.breakpoints.up('md')]: {
        marginLeft:300,
      },
    },
    profilesidebar:{
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    rightMenu :{
      [theme.breakpoints.up('sm')]: {
        display:'flex',
        justifyContent:'left',
      },
    }
  }),
 
);
function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function MyProfileMain() {

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  const menuId = 'menuID';

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  

  const handleClick = () => {
    setOpen(!open);
  };
 
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const drawer=(
    <div className={classes.drawerContainer}>
      <Typography variant= "h4" className={classes.logoname} color="primary" > 
      <img src={logo} width="50px" height="50px" className={classes.ig} />Inovact</Typography>      
   <List >
        { sidebarData.map((list)=>{
        return(
        <ListItem className={classes.listitems} button   selected={selectedIndex === list.index}
          onClick={(event) => handleListItemClick(event, list.index)}>
        <ListItemAvatar>
          <Avatar>  
            {list.icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={list.text} />
        </ListItem>
        );
        })}
      <Divider />

      <ListItem className={classes.listitems} button onClick={handleClick} >
        <ListItemText primary="Team" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit> 
        <List component="div" disablePadding>
          {teamlist.map((list)=>{
            return(
            <ListItem className={classes.listitems} button   selected={selectedIndex === list.index}
                onClick={(event) => handleListItemClick(event, list.index)}>
              <ListItemAvatar>
              <Avatar>
              {list.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={list.teamname} secondary={list.designation} />
          </ListItem>
            );
          })}
        </List>
      </Collapse>
    </List>
   
    <Button variant="outlined" color="primary" className={classes.buttonP} >
         Join New Team
    </Button> 
    </div>
  );
  
  return (
    <GlassCard>  
    <div className={classes.header}>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        
          <div className={classes.menus}>
          <div className={classes.grid1}>
          <Tabs
                          value={value}
                          onChange={handleChange}
                          indicatorColor="primary"
                          textColor="primary"  
                          className={classes.tabsAll}        
                      >
                        <Tab label="Projects" {...a11yProps(0)} className={classes.tabI} />
                        <Tab label="Ideas" {...a11yProps(1)} className={classes.tabI} />
                        <Tab label="Teams" {...a11yProps(2)} className={classes.tabI}/>
                        <Tab label="Mentor" {...a11yProps(3)} className={classes.tabI} />
                        <Tab label="TTP" {...a11yProps(5)} className={classes.tabI}/>
                     
                      </Tabs> 
          </div>
           
                      <div className={classes.grid2}>
                      <MenuComp />
                      </div>
                    
              </div> 
          </Toolbar>
      </AppBar>

      <Hidden smUp implementation="css">
          <Drawer
            className={classes.drawer}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
       
          >
            <Toolbar />
          {drawer}       
          </Drawer>
      </Hidden>
       
      <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>

      <main className={classes.content}>
        <div/>
        <Container>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3} >
                  <Grid item sm={12} >
                       <Profile />
                  </Grid>                     
            </Grid>
       </Container>
      </main>
    </div>
 </GlassCard>
  );
}

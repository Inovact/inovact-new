import React from 'react';
import {  useTheme } from '@material-ui/core/styles';
import useStyles from './feedStyles';
import logo from './../../../assets/logo.png';
import {Container, Grid,Paper,Box,Tabs,Tab, CardMedia,Drawer,Card,CardContent,
        AppBar,Toolbar,CssBaseline,List,Badge,Button,Typography,Hidden,
        Divider,IconButton,ListItem, ListItemIcon,ListItemText,Collapse,ListItemAvatar,Avatar} from '@material-ui/core'

import GlassCard from './GlassCard';
import ProfileSideBar from '../Card/ProfileCard';
import SwipeableViews from 'react-swipeable-views';


import expandLess from './../../../assets/expand-less.png';
import expandMore from './../../../assets/expand-more.png';
import  menuIcon from './../../../assets/menu.png';

import RenderMentorCard from '../Card/MentorCard';
import RenderProjectCard from '../Card/ProjectCard';
import RenderIdeaCard from '../Card/IdeaCard';
import RenderTeamCard from '../Card/TeamCard';

import MenuComp from './MenuComp';
import { sidebarData,teamlist} from './MenuItemList';

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

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Feed() {

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
            <img src={list.icon} className={classes.imgs} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={list.text} />
        </ListItem>
        );
        })}
      <Divider />

      <ListItem className={classes.listitems} button onClick={handleClick} >
        <ListItemText primary="Team" />
        {open ?   <img src={expandLess} className={classes.imgs} /> :<img src={expandMore} className={classes.imgs} />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit> 
        <List component="div" disablePadding>
          {teamlist.map((list)=>{
            return(
            <ListItem className={classes.listitems} button   selected={selectedIndex === list.index}
                onClick={(event) => handleListItemClick(event, list.index)}>
              <ListItemAvatar>
              <Avatar>
              <img src={list.icon} className={classes.imgs} />  </Avatar>
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
              <img src={menuIcon} className={classes.imgs} />
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
            }}>
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
                                      </Grid>
                                    </Grid>
                                  <Grid item xs={12} sm={4} className={classes.profilesidebar}>
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
                                  
                                  </Grid>
                                 
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes.profilesidebar}>
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
                                  
                                  </Grid>
                                 
                                </Grid>
                                <Grid item xs={12} sm={4} className={classes.profilesidebar}>
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
                                    </Grid>   
                                  </Grid>

                                  <Grid item xs={12} sm={4} className={classes.profilesidebar}>
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

import React from 'react';
import { fade, makeStyles,Theme, useTheme  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Box,Typography} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Button,Paper} from '@material-ui/core';
import {FiMenu} from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';

import { SidebarData } from './MenuItem';
import Submenu from './Submenu';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'none',
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
 
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginLeft:'750px'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appbar:{
    justifyContent:'space-between'
  },
  sidebar:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height:'1rem',
    backgroundColor: '#020652'
  },
  sidebarHeader:{
    display: 'flex',
    textDecoration: 'none',
    color:'#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '40px',
    fontSize: '2rem',
    margin: '2rem',
    marginTop:'-240px',
  }
}));


const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: #020652;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;

`;



function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
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
export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();

  const [sidebar, setSidebar] = React.useState(false); //SideNavgation
  const showSidebar = () => setSidebar(!sidebar);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null); //mobile view of appbar
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [value, setValue] = React.useState(0);  //TabNavigation

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const handleProfileMenuOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event:any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'menuID';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Home</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem>   
    </Menu>
  );

  const mobileMenuId = 'menuID-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <IoIosNotifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
          aria-label="account of current user"
          aria-controls="menuID"
          aria-haspopup="true"
          color="inherit"
        >
        <Button variant="contained" color="primary">
         Go Premium
        </Button>
        <p>Go Premium</p> 
        </IconButton>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="menuID"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
 
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            >
            <FiMenu onClick={showSidebar} />
          </IconButton>

        <div className={classes.grow} />
         
          <div className={classes.sectionDesktop}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
              <IconButton aria-label="notifications" color="inherit">
                <Badge badgeContent={7} color="secondary">
                  <IoIosNotifications />
                </Badge>
              </IconButton>
              <IconButton >
                  <Button variant="contained" color="secondary">Go Premium</Button>
              </IconButton>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >     
                  <AccountCircle />
              </IconButton>
          </div>

          <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
          </div>
        </Toolbar>

        <Paper style={{zIndex:1150}}>
            <SidebarNav sidebar={sidebar} className={classes.sidebar}>
                  <div  >
                      <Link to="#" onClick={showSidebar} className={classes.sidebarHeader}>
                      <FiMenu  />  <Typography variant="h4"> Inovact</Typography>
                  
                      </Link>
                      {SidebarData.map((item, index) => {
                          return <Submenu item={item} key={index} />;
                      })}
                  </div>
              </SidebarNav>
          </Paper>

      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <style>
        {`header{
               padding:0px;
        }

.MuiAppBar-root{
  flex-direction:initial !important
} `}
      </style>
    </div>
  );
}

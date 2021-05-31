import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth = 280;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listitemsicon:{
      borderRadius:'50%',
      padding:10,
      marginLeft:10,
      width:'40px',
      height:'40px'
    },
    imgs:{
      width:'30px',
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
      [theme.breakpoints.up('sm')]: {
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
margin:'5px',
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
      paddingLeft:'80px',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
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
      [theme.breakpoints.up('sm')]: {
        marginLeft:150,
      },
    },
    profilesidebar:{
      display: 'none',
      [theme.breakpoints.up('sm')]: {
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
export default useStyles;
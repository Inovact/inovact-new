import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import {Container, Grid,Paper, Typography,Box,Tabs,Tab,} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import RenderProjectCard from '../Card/ProjectCard';
import AllIdeaCard from '../Card/IdeaCard';
import AllSubscriberCard from '../Card/SubscriberCard';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
    projectsheading:{
            display:'flex',
            justifyContent:'space-between',
            padding:'30px',
          
            paddingRight:'40px',
            paddingBottom:'40px',
    },
    footer:{
        marginTop:'20px',
        paddingBottom:'20px',
    },
    grid:{

    },gridItem:{
        padding:'30px',
    },feedtab:{

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
    {
      "id": 1,
    "description":'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    "name": 'John Doe',
    "isComplete":true,
    },
    {
      "id": 2,
    "description":'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    "name": 'J Doe',
    "isComplete":true,
    },
    {
      "id": 3,
    "description":'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    "name": 'John Doe',
    "isComplete":true,
    },
  ]
  

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
  const AllProjectCard =()=>{
    {projectDetails.map((data)=>{   
        return(     
        <Box id="#allprojects">  
                <RenderProjectCard />   
        </Box> 
    );
  })}
  }
const Feed =()=>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
    
    const handleChangeIndex = (index: number) => {
      setValue(index);
    };

    const classes=useStyles();
    const theme = useTheme();
    return(
       <div>
       
            <Container>            
                    

                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                            <TabPanel value={value} index={0} dir={theme.direction} >
                                    {AllProjectCard}
                                    hello
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                    {AllIdeaCard}
                                    hii
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                    {AllSubscriberCard}
                            </TabPanel>
                    </SwipeableViews>
                  
            </Container>
        </div>
    );
}
export default Feed;
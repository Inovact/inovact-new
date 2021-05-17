import React from 'react';
import Profile from './Profile';
import SwipeableViews from 'react-swipeable-views';
import {Container, Grid,Paper, Typography,Box,Tabs,Tab,} from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AllProjectCard from '../Card/ProjectCard';
import AllIdeaCard from '../Card/IdeaCard';
import AllSubscriberCard from '../Card/SubscriberCard';
import NavBar from '../Feed/NavBar';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

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

const MyProfile =()=>{
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  
  const handleChangeIndex = (index: number) => {
    setValue(index);
  }
    return(
      
        <div>
          <NavBar />
           <Profile  />
           <div>

           <Container>
           <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="tabs"
             >
          <Tab label="Projects" {...a11yProps(0)} />
          <Tab label="Ideas" {...a11yProps(1)} />
          <Tab label="Subscribers" {...a11yProps(2)} />
        </Tabs>
           </Container>
            <Container>            
                    

                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                            <TabPanel value={value} index={0} dir={theme.direction} >
                                    {AllProjectCard}
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                    {AllIdeaCard}
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                    {AllSubscriberCard}
                            </TabPanel>
                    </SwipeableViews>
                  
            </Container>
        </div>
        </div>
    )
}
export default MyProfile;
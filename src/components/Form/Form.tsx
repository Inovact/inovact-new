import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SForm from './EduDetailsStep';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from './../../assets/logo.png';

import {ImCheckboxUnchecked} from 'react-icons/im';
import {ImCheckboxChecked} from 'react-icons/im';
import {TextField , Checkbox,Button,Grid,Typography ,Container,Card,CardContent} from '@material-ui/core';
const icon = <ImCheckboxUnchecked fontSize="small" />;
const checkedIcon = <ImCheckboxChecked fontSize="small" />;


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    container:{
      marginTop:'120px',
      alignItems:'center',
      justifyContent:'center',
  },
  card:{
      maxWidth:'700px',
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
      borderRadius:'5%',
      '@media screen and (max-width:600px)':{
          maxWidth:'300px',
          minHeight:'400px',
      },
  },
  header:{
    position:'fixed',
    top:'0',
    left:'0',
    backgroundColor:'#020652',
    width:'100%',
    margin:'0px',
    display:'flex',
    justifyContent:'left',
    padding: '10px 40px',
    zIndex:100,
    transition:'0.6s',
    color:'#FFA500 !important',
    textDecoration:'none',
    textDecorationLine:'none',
    textTransform:'none',
  },
  logoname:{
    marginLeft:'20px',
    marginTop:'10px',
  },
  heading:{
    marginTop:'40px',
    marginBottom:'40px',
    color:'black !important',
  },
  
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

const interest = [
  { title: 'Machine Learning' },
  { title: 'Cloud Computing' },
  { title: 'AI' },
  { title: 'Web development' },
  { title: 'Design' },
  { title: 'Digital Marketing' },
  { title: 'Android Development' },
  { title: 'Biotechnology' },
  { title: 'Biotechnology' },
  { title: 'Biotechnology' },
  { title: 'Biotechnology' },
  { title: 'Biotechnology' },
  { title: 'Biotechnology' },
  { title: 'Biotechnology' },

];
function getSteps() {
  return ['Personal Details', 'Educational Details', 'Interests'];
}

function getStepContent(stepIndex: number) {
  
  switch (stepIndex) {
    case 0:
      return (
         <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  required
                  id="outlined-basic" 
                  label="Firstname" 
                  variant="outlined"
                  
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField 
                  required
                  name="lastname"
                  id="outlined-basic" 
                  label="LastName" 
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField 
                      required
                      name="username"
                      id="username" 
                      label="Username" 
                      variant="outlined"
                     
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField 
                      name="phone"
                      id="phone" 
                      label="Phone number" 
                      variant="outlined"
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField 
                      required
                      name="username"
                      id="username" 
                      label="Username" 
                      variant="outlined"
                     
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField 
                      name="phone"
                      id="phone" 
                      label="Phone number" 
                      variant="outlined"
                     
                  />
              </Grid>
         </Grid>
       );
    case 1:
      return <SForm />;
    case 2:
      return (  <section>
        <Grid container spacing={1}>
    
                <Grid item xs={12} style={{  maxWidth: '100%',
                                             paddingRight:'20px',
                                             paddingLeft:'20px'}}> 
                            <Typography variant="h5">Field of Interest</Typography>
                        <Autocomplete
                            multiple
                            id="fieldOfInterest"
                            options={interest}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            renderOption={(option, { selected }) => (
                        <React.Fragment>
                        <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                />
                {option.title}
                </React.Fragment>
            )}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" 
                                        label="Fields of Interest" 
                                        placeholder="Fields of Interest" />
            )}
            />
        </Grid>
    </Grid>
 </section>);
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
   <Link to='/' className={classes.header}>
                <img src={logo} width="60px" />
                <Typography variant="h4" className={classes.logoname} >Inovact</Typography>
          </Link>
           
      <div>
        {activeStep === steps.length ? (
          <div> 
            <Container className={classes.container} maxWidth="sm">
          <Card className={classes.card}>
          <Typography variant="h4" style={{margin:'30px'}}> Lets get started</Typography>
              <CardContent>
            <Stepper activeStep={activeStep} alternativeLabel>
                      {steps.map((label) => (
                      <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      </Step>
                      ))}
                      </Stepper>
            <Button href="/feed" variant="contained" color="primary" >Get started</Button>
            </CardContent>
            </Card>
            </Container>
          </div>
        ) : (
           <Container className={classes.container} maxWidth="sm">
                    <Card className={classes.card}>
                        <CardContent>
                        <Stepper activeStep={activeStep} alternativeLabel>
                      {steps.map((label) => (
                      <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      </Step>
                      ))}
                      </Stepper>
                        <form>
                        {getStepContent(activeStep)}
                        </form>
                    </CardContent>
                    <div style={{padding:'30px'}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}  >
                {activeStep !== steps.length - 1 ?'Next' :'Finish'}
              </Button>
            </div>
              </Card>
          </Container>
           
        )}
      </div>
    </div>
  );
}

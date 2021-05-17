import React,{useState} from  'react';
import {Link} from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/logo.png';
import {ImCheckboxUnchecked} from 'react-icons/im';
import {ImCheckboxChecked} from 'react-icons/im';
import {TextField , Checkbox,FormControl ,Select,MenuItem,InputLabel,Button,Grid,Typography ,Container,Card,CardContent} from '@material-ui/core';
const icon = <ImCheckboxUnchecked fontSize="small" />;
const checkedIcon = <ImCheckboxChecked fontSize="small" />;

const useStyles=  makeStyles((theme) => ({
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
heading:{
  marginTop:'40px',
  marginBottom:'40px',
  color:'black !important',
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
  textTransform:'uppercase',
},
logoname:{
  marginLeft:'20px',
  marginTop:'10px',
},
}));
type StudentDetailState= {
    firstname:string;
    lastname:string;
    phno:number;
    username:string;
    college:string;
    education:string;
    fieldOfInterest:string;
}
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

type Props = any;

const StudentForm : React.FunctionComponent<Props> =({title:string}) => {
  const styles=useStyles();
  const initialState = {
    firstname:"",
    lastname:"",
    phno:"",
    username:"",
    college:"",
    education:"",
    fieldOfInterest:"",
};
const [values, setValues] = useState (initialState);

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValues({ ...values, [event.target.name]: 
event.target.value });
};

const onSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
alert("registered");
};

return(
    <>
    <section>
      <Link to='/' className={styles.header}>
          <img src={logo} width="60px" />
          <Typography variant="h4" className={styles.logoname} >Inovact</Typography>
      </Link>
      <Container className={styles.container} maxWidth="sm">
              <Card className={styles.card}>
                  <CardContent>
                  <Typography className={styles.heading} variant="h4" gutterBottom>
                        Enter the following detail
                </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  required
                  id="outlined-basic" 
                  label="Firstname" 
                  variant="outlined"
                  onChange={onChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField 
                  required
                  name="lastname"
                  id="outlined-basic" 
                  label="LastName" 
                  variant="outlined"
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField 
                      required
                      name="username"
                      id="username" 
                      label="Username" 
                      variant="outlined"
                      onChange={onChange}
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextField 
                      name="phone"
                      id="phone" 
                      label="Phone number" 
                      variant="outlined"
                      onChange={onChange}
                  />
              </Grid>
         
              <Grid item xs={12} sm={6}>
                <TextField 
                    required
                    id="outlined-basic" 
                    label="Name of the college" 
                    variant="outlined"
                    placeholder="enter you college name"
                    onChange={onChange}
                />
              </Grid>
            <Grid item xs={12} sm={6} >
                <FormControl variant="outlined" style={{minWidth:'227px',}} >
                    <InputLabel id="education">Education</InputLabel>
                    <Select
                      labelId="education"
                      name="education"  
                      label="Education">
                      <MenuItem value={"UG"}>UG</MenuItem>
                      <MenuItem value={"PF"}>PG</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} style={{  maxWidth: '100%',paddingRight:'20px',paddingLeft:'20px'}}>
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
                        <TextField {...params} variant="outlined" label="Checkboxes" placeholder="Favorites" />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                           <Button href="/feed" variant="contained" color="secondary">Finish</Button>
                  </Grid>
             </Grid>
           </form>
         </CardContent>
        </Card>
     </Container>
  
</section>
</>
        );
}

export default StudentForm;
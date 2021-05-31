import React from 'react'
import { render } from 'react-dom'

import { Form, Field } from 'react-final-form'

import {TextField , Checkbox,FormControl ,Select,MenuItem,InputLabel,Button,Grid,Typography ,Container,Card,CardContent} from '@material-ui/core';

const onSubmit = () => {

}
interface IProps {
  children: any;
  when:string;
  is:string;
}

const Condition = ({ when, is, children,...props}: IProps) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const SForm = () => (

    <Form
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          
          <Grid container spacing={3} justify="center"
                                    alignItems="center">
      
          <Grid item xs={12}> <Typography variant="h6">I am a </Typography>  </Grid>
             <Grid container>
             <Grid item xs={6}>
              <label>
                <Field
                  name="reception"
                  component="input"
                  type="radio"
                  value="student"
                />{' '}
               <Typography variant="h6">Student </Typography>
              </label>
              </Grid>

              <Grid item xs={6}>
              <label>
                <Field
                  name="reception"
                  component="input"
                  type="radio"
                  value="mentor"
                />{' '}
             <Typography variant="h6">Mentor</Typography>
              </label>
              </Grid>
        </Grid>
        
<Grid item xs={12} >
<Condition when="reception" is="student" >
            <Grid container spacing={2} style={{  maxWidth: '100%',
                                            }} >
            <Grid item xs={12} md={6} >
                <TextField 
                    required
                    id="outlined-basic" 
                    label="Name of the college" 
                    variant="outlined"
                    placeholder="Enter you college name"

                />
              </Grid>
            <Grid item xs={12}  md={6}>
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
             
            </Grid>
          </Condition>
      </Grid>
          <Grid item>
          <Condition when="reception" is="mentor">
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} >  
                    <TextField 
                              name="qualification" 
                              id="qualification" 
                              label="Qualification" 
                              variant="outlined"
                              placeholder="Enter your highest qualification"
                              
                      />
                  </Grid>


                  <Grid item xs={12} md={6} > 
                          <TextField 
                              name="fieldOfExpertise"
                              id="fieldOfExpertise" 
                              label="Field Of Expertise" 
                              variant="outlined"
                              placeholder="Enter you Field of expertise"
                              
                          />
                      </Grid>
              
                      <Grid item xs={12} md={6} > 
                          <TextField 
                          name="achivement"
                          label="Achivement" 
                          variant="outlined"
                          placeholder="What are your achivements"
                          
                          />
                      </Grid>

                      <Grid item xs={12} md={6}> 
                          <TextField 
                              name="experience"
                              id="experience" 
                              label="Experience" 
                              variant="outlined"
                              placeholder="Your Experiences"
                              
                          />
                      </Grid>
                      
                      <Grid item xs={12} > 
                          <TextField 
                              name="currentWork"
                              id="Current work" 
                              label="Current work" 
                              variant="outlined"
                              placeholder="I'm currently workin in..."
                              
                          />
                      </Grid>
                    </Grid>
                </Condition>
              </Grid>
      </Grid>
        </form>
      )}
    </Form>
  
)

export default SForm;
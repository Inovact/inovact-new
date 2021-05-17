import React from 'react';
import {Link} from 'react-router-dom';
import {CardContent, Container,Card, Typography,ButtonGroup,Button,AppBar,Toolbar} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
container:{
        marginTop:'110px',
        alignItems:'center',
        justifyContent:'center',
    },
card:{
        maxWidth:'700px',
        minHeight:'500px',
        boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
        borderRadius:'5%',
        '@media screen and (max-width:600px)':{
            maxWidth:'300px',
            minHeight:'400px',
        },
    },
button:{
           marginTop:'20px',
           textDecoration:'none',
           fontSize:'30px',
           paddingLeft:'40px',
           paddingRight:'40px',
           borderBottomColor: 'rgba(0, 0, 0, 0.23)  !important',
},
heading:{
    marginTop:'40px',
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
    padding: '15px 40px',
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

const RegistrationFollowUp =()=>{
const styles=useStyles();

return(
 
 <section className="followUp">
    <Link to='/' className={styles.header}>
        <img src={logo} width="60px" />
        <Typography variant="h4" className={styles.logoname} >Inovact</Typography>
    </Link>
     <Container className={styles.container} maxWidth="sm">
            <Card className={styles.card}>
                <CardContent>
                    <Typography className={styles.heading} variant="h3">
                        Who the hell are you?
                    </Typography>
                        <ButtonGroup
                        orientation="vertical"
                        >
                          <Button href="/studentform" size="large" className={styles.button} variant="outlined" style={{marginTop:'40px'}}>Student</Button>
                          <Button href="/mentorform"  size="large" className={styles.button} variant="outlined"  style={{marginTop:'20px'}}>Mentor</Button>
                          <Button href="/investorform"  size="large" className={styles.button} variant="outlined"  style={{marginTop:'20px'}}>Investor</Button>
                        </ButtonGroup>
                </CardContent>
            </Card>
     </Container>
 </section>
);
}
export default RegistrationFollowUp;
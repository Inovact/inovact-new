import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import TestButtons from './test.tsx'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }
   onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
  };
  render() 
  {
    let params = new URLSearchParams(this.props.location.search); //pars query parametes

    const { errors } = this.state;
    return (
      params.get('login') && <Modal
     >
<section className="section">
        <div className='register-container'>
  
          <div className='user signinBx'>
          
            <div className='formBx'>
              <form onSubmit={this.onSubmit}>
              <div class="modal-header">
                  <h2>Sign In</h2>
                  <button type="button" class="close" data-dismiss="modal"  onClick={() => {
                  this.props.history.push(this.props.location.pathname);
                  }}>&times;</button>
              </div>
                <input
                  style={{ padding: '0 10px', margin: '8px 0' }}
                  type='text'
                  id='email'
                 
                
                  placeholder='Email Address'
                />
                <span style={{ color: 'red' }}>
                 
                </span>
                <input
                  style={{ padding: '0 10px', margin: '8px 0' }}
                  type='password'
                  id='password'
                  placeholder='Password'
                />
               
                <input type='submit' value='Login' />
                <p className='signup' style={{ textAlign: 'center' }}>
                  Don't have an account ?<Link to='/register'>Sign Up</Link>{' '}
                </p>
                <div className='other-signup'>
                  <span style={{ fontSize: '12px', color: 'grey' }}>
                    or signup using
                  </span>
                <TestButtons />
                </div>
              </form>
            </div>
          </div>
        </div>

        <style>
          {`
                    .other-signup{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        }
                    
                     
                    
                    .signup-icons img  {
                        width:25px;
                        }
                        
                    
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: sans-serif;
                    
                    }
                    
                    .section{
                        position: relative;
                        min-height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                        top:30px;
                        z-index:300;
                      
                    }
                    
                    section .register-container{
                        position: relative;
                        width: 400px;
                        height: 500px;
                        background: #fff;
                        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
                        overflow: hidden;
                        transition: 1s;
                    }
                    
                    section .register-container .user{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                    }
                    
                
                    
                    section .register-container .user .formBx{
                        position: relative;
                        width: 100%;
                        height: 100%;
                        background: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding:40px;
                        
                        transition: 0.5s;
                    }
                    
                    .modal-header{
                      display:inline-block;
                      font-size: 18px;
                      font-weight: 600;
                      text-transform: uppercase;
                      letter-spacing: 2px;
                      text-align: center;
                      width: 100%;
                      margin-bottom: 10px;
                      color: #555;
                    }
                    .close {
                      position:relative;
                      top:30px;
                      font-size: 18px;
                      display:inline-block;
                      float:right;
                      border:none;
                      background:none;
                    }
                    section .register-container .user .formBx form h2{
                      display:inline-block;
                        font-size: 18px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        text-align: center;
                        color: #555;
                    }
                    
                    section .register-container .user .formBx form input{
                        position: relative;
                        width: 100%;
                        padding: 10px;
                        background: #f5f5f5;
                        color: #333;
                        border: none;
                        outline: none;
                        box-shadow: none;
                        margin: 8px 0;
                        font-size: 14px;
                        letter-spacing: 1px;
                        font-weight: 300;
                    }
                    
                    section .register-container .user .formBx form input:focus{
                        position: relative;
                        width: 100%;
                        padding: 10px;
                        background: #f5f5f5;
                        color: #333;
                        border: none;
                        outline: none;
                        margin: 8px 0;
                        font-size: 14px;
                        letter-spacing: 1px;
                        font-weight: 300;
                        box-shadow: 0 2px 4px grey;
                    }
                    
                    
                    section .register-container .user .formBx form input[type="submit"]{
                        max-width: 100px;
                        background: #677eff;
                        color: #fff;
                        cursor: pointer;
                        font-size: 14px;
                        font-weight: 500;
                        letter-spacing: 1px;
                        transition: 0.5s;
                    }
                    
                    section .register-container .user .formBx form .signup{
                        position: relative;
                        margin-top: 20px;
                        font-size: 12px;
                        letter-spacing: 1px;
                        color: #555;
                        text-transform: uppercase;
                        font-weight: 300;
                    }
                    
                    section .register-container .user .formBx form .signup a{
                        font-weight: 600;
                        text-decoration: none;
                        color: #677eff;
                    }
                    section .register-container .imgBx {
                     // display:none;
                    }
                    @media (max-width: 991px) {
                        section .register-container {
                            max-width: 400px;
                        }
                        section .register-container .imgBx{
                            display: none;
                        }
                        section .register-container .user .formBx{
                            width: 100%;
                        }
                    }
                    `}
        </style>
        </section>
     </Modal>
    );
  }
}


export default Login;

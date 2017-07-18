import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SignIn.css';
import history from '../../history';
import axios from 'axios';
import cookie from 'react-cookie';
import FontAwesome from 'react-fontawesome';
import { authUser, toggleSignIn, toggleSignUp } from '../../actions/auth';
import { connect } from 'react-redux';



class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          this.setState({
            error: res.data.message
          })
        } else {
          cookie.save('token', res.data.token, { path: '/' });
          cookie.save('user', res.data.user, { path: '/' });
          this.props.authUser();
          this.props.authenticated && history.push('/profile');
        }
      })
      .catch((err) => {
        cookie.save('user', {}, { path: '/' })
        this.setState({
          error: 'An error occured. Let admin know.'
        })
      });
  }

  render() {
    return (
      <div style={ this.props.signIn ? { transform: 'translate(0)' } : { transform: 'translate(100% )' } }  className={s.root}> 
        <form 
          onSubmit={this.handleSubmit} 
          className={s.container}
        >
          <div className={s.title}>
            <h1 className={s.headerOne}>Sign In</h1>

            <button 
              onClick={
                (e) => {
                  e.preventDefault() 
                  return this.props.toggleSignIn()
                }
              }
              className={s.exitButton}
            >
              <FontAwesome
                name='times'
                className={s.times}
              />
            </button>
          </div>

          <div className={s.body}>
            <label className={s.emailLabel} >Email Address</label>
            <input 
              className={s.emailInput} 
              placeholder="Don't keep it empty :)"
              type='text' 
              name='email'
              onChange={this.handleChange.bind(null, 'email')}
              required
            />

            <label className={s.passwordLabel} >Password</label>
            <input 
              className={s.passwordInput} 
              placeholder="Type something super secret"
              type='password' 
              name='password' 
              onChange={this.handleChange.bind(null, 'password')}
              required
            />

            { this.state.error && <label className={s.errorLabel}>{this.state.error}</label> }

            <button className={s.submitButton} type="submit">
              Log in
            </button>

            <button 
              onClick={
                (e) => {
                  e.preventDefault()
                  return this.props.toggleSignUp()
                }
              } 
              className={s.signUpButton} 
            >
              Create an Account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: () => {
      dispatch(authUser())
    },
    toggleSignIn: () => {
      dispatch(toggleSignIn())
    },
    toggleSignUp: () => {
      dispatch(toggleSignUp())
    }
  }
}

const mapStateToProps = (state) => {
  return state.auth
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(SignIn));
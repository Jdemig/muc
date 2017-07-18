import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SignUp.css';
import history from '../../history';
import axios from 'axios';
import cookie from 'react-cookie';
import FontAwesome from 'react-fontawesome';
import { authUser, toggleSignUp, toggleSignIn } from '../../actions/auth';
import { connect } from 'react-redux';
import Link from '../../components/Link';



class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
      chekcbox: false,
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
    axios.post('/register', {
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        username: this.state.username
      })
      .then((res) => {
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
        console.log(err)
        this.setState({
          error: err
        })
      });
  }

  render() {
    return (
      <div style={ this.props.signUp ? { transform: 'translate(0)' } : { transform: 'translate(100% )' } }  className={s.root}> 
        <form 
          onSubmit={this.handleSubmit} 
          className={s.container}
        >
          <div className={s.title}>
            <h1 className={s.headerOne}>Sign Up</h1>

            <button 
              onClick={
                (e) => {
                  e.preventDefault() 
                  return this.props.toggleSignUp()
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
              value={this.state.email}
              placeholder="Don't keep it empty :)"
              type='text' 
              name='email'
              onChange={this.handleChange.bind(null, 'email')}
              required
            />

            <label className={s.passwordLabel} >Password</label>
            <input 
              className={s.passwordInput} 
              value={this.state.password}
              placeholder="Type something super secret"
              type='password' 
              name='password' 
              onChange={this.handleChange.bind(null, 'password')}
              required
            />

            <label className={s.passwordLabel} >Confirm Password</label>
            <input 
              className={s.passwordInput} 
              value={this.state.confirmPassword}
              placeholder="Confirm that secret"
              type='password' 
              name='confirmPassword' 
              onChange={this.handleChange.bind(null, 'confirmPassword')}
              required
            />

            <label className={s.usernameLabel} >Username</label>
            <input 
              className={s.usernameInput} 
              value={this.state.username}
              placeholder="The will be at the end of your profiles url"
              name='username' 
              onChange={this.handleChange.bind(null, 'username')}
              required
            />

            <div className={s.termsContainer}>
              <input 
                className={s.checkbox} 
                value={this.state.checkbox}
                type='checkbox' 
                name='password' 
                onChange={this.handleChange.bind(null, 'checkbox')}
                required
              />
              <label className={s.termsLabel} >I have read and agreed to the <Link className={s.termsLink} to='terms' >terms of service</Link></label>
            </div>

            { this.state.error && <label className={s.errorLabel}>{this.state.error}</label> }

            <button className={s.submitButton} type="submit">
              Continue
            </button>

            <button 
              onClick={
                (e) => {
                  e.preventDefault()
                  return this.props.toggleSignIn()
                }
              } 
              className={s.signUpButton} >
              Already a member?
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
    toggleSignUp: () => {
      dispatch(toggleSignUp())
    },
    toggleSignIn: () => {
      dispatch(toggleSignIn())
    }
  }
}

const mapStateToProps = (state) => {
  return state.auth
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(SignUp));
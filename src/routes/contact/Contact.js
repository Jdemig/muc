import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';
import Link from '../../components/Link';
import axios from 'axios';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailString: '',
      messageString: '',
      nameString: '',
      sending: false,
      sent: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: this.state.nameString,
      email: this.state.emailString,
      message: this.state.messageString
    }

    this.setState({
      emailString: '',
      messageString: '',
      nameString: '',
      sending: true,
      sent: false
    });

    axios.post('/send', formData)
      .then((res) => {
        console.log(res);
        if (res.request.statusText === "OK") {
          this.setState({
            sending: false,
            sent: true
          });
        }
      });
  }

  handleChange = (key, e) => {
    this.setState({
        [key]: e.target.value
    });
  }


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.headerTwo} >Contact Us</h2>
          <div className={s.contactInfo}>
            <p className={s.contactName}>MeetupCannabis, Inc.</p>
            <p className={s.contactEmail}>hi@meetupcannabis.com</p>
            <p className={s.contactNumber}>(303) 929-9963</p>
          </div>

          <h2 className={s.headerTwo}> Message Us</h2>
          <form onSubmit={this.handleSubmit} className={s.messageForm}>
            <input 
              onChange={this.handleChange.bind(null, 'nameString')} 
              className={s.nameInput} 
              value={this.state.nameString}
              name='name' type='text' 
              placeholder='name*' 
              required
            />
            <input 
              onChange={this.handleChange.bind(null, 'emailString')} 
              className={s.emailInput} 
              value={this.state.emailString}
              name='email' 
              type='text' 
              placeholder='email*' 
              required
            />
            <textarea 
              onChange={this.handleChange.bind(null, 'messageString')} 
              className={s.messageInput} 
              name='message' 
              value={this.state.messageString}
              type='text' 
              placeholder='message*' 
              required
            />
            <button type='submit' className={s.submitButton} >Submit</button>
            { this.state.sending && <p className={s.sending}>Sending...</p> }
            { this.state.sent && <p className={s.sent}>Message Sent!</p> }
          </form>
        </div>
      </div>  
    );
  }
}

export default withStyles(s)(Contact);

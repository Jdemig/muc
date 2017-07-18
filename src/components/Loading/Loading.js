import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Loading.css';

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }
  componentDidMount() {
    var stopper = this.props.text + '...';
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState(function() {
          return {
            text: this.props.text
          }
        });
      } else {
        this.setState(function(prevState) {
          return {
            text: prevState.text + '.'
          }
        });
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p className={s.content} >
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 200
}

export default withStyles(s)(Loading);
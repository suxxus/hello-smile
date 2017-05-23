import styles from './splash.css';
import React, { Component } from 'react';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    handleEnterKey(evt) {
        const isEnterKey = evt.which === 13;
        const { callback } = this.props;

        if (isEnterKey) {
            evt.preventDefault();
            callback(this.state.username);
            this.setState({ username: '' });
        }
    }

    handleChange({ target }) {
        this.setState({ username: target.value });
    }

    render() {

        const {
            display
        } = this.props;

        return (
            <form className="splash" id="user-name" style={{display}}>
              <input placeholder="your name" className={styles.inputName} onKeyDown={this.handleEnterKey.bind(this)} onChange={this.handleChange.bind(this)} value={this.state.username} />
              <h3 className={styles.message}>fill the field with your name and press enter.</h3>
          </form>
        );
    }
}

Splash.propTypes = {
    display: React.PropTypes.string,
    callback: React.PropTypes.func.isRequired
};

export default Splash;

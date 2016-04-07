import styles from './splash.css';
export default React => {

    const {
        string,
        func
    } = React.PropTypes;

    const splash = ({ callback, display = 'block' }) => {

      const callbackWrapper = e => {
          const enterPressed = e.which === 13,
                action = enterPressed ? callback : () => false;

              action(e.target.value);
      };

      return (
        <div className="splash" style={{display: display}}>
          <input className={styles.inputName} placeholder="your name" onKeyDown={callbackWrapper} />
          <p className={styles.message}>fill the field with your name and press enter.</p>
        </div>
      );
    };

    splash.propTypes = {
        display: string,
        callback: func.isRequired
    };

    return splash;
};

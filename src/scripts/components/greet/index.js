import styles from './greet.css';

export default React => {

    const {
        func,
        string,
    } = React.PropTypes;


    const greet = ({ callback, display = 'block', name }) => {
      return (
          <div className="hello" style={{display: display}} >
            <h1 className={styles.greet}>Hello {name}!</h1>
            <button className={styles.clickme} type="button" onClick={callback}>
              click me
            </button>
          </div>
      );
    };

    greet.propTypes = {
        display: string,
        name: string.isRequired,
        callback: func.isRequired
    };

    return greet;
};

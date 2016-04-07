
import styles from './smile.css';

export default React => {

    const {
        string,
        func
    } = React.PropTypes;

    const smile = ({name, callback, display = 'block' }) => {
      return (
            <div className="smile" style={{display: display}}>
              <h1 className={styles.greet}>Hello {name}!</h1>
              <div className={`avatar ${styles.smile}`}></div>
              <div className={`reload ${styles.reload}`} onClick={callback}/>
            </div>
      );
    };

    smile.propTypes = {
        display: string,
        callback: func.isRequired
    };

    return smile;
};


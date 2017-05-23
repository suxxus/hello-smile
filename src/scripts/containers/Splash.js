import { connect } from 'react-redux';
import { userName, changeView } from 'scripts/actions';
import Splash from 'scripts/components/splash';
import { SHOW_GREET, SHOW_SPLASH } from 'scripts/constants';

const mapStateToProps = state => ({
    display: state.view === SHOW_SPLASH ? 'block' : 'none'
});

const mapDispatchToProps = dispatch => ({
    callback: username => {
        dispatch(userName(username));
        dispatch(changeView(SHOW_GREET));
    }
});

const splash = () => connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);

export default splash;

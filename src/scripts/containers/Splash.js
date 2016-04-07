import { connect } from 'react-redux';
import { userName, changeView } from 'scripts/actions';
import Splash from 'scripts/components/splash';
import { SHOW_GREET } from 'scripts/constants';

const mapStateToProps = (state) => ({
    display: state.views.splash ? 'block' : 'none'
});

const mapDispatchToProps = dispatch => {

    return {
        callback: name => {
            dispatch(userName(name));
            dispatch(changeView(SHOW_GREET));
        }
    };
};

const splash = React => connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash(React));

export default splash;

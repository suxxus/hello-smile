import { connect } from 'react-redux';
import { changeView, userName } from 'scripts/actions';
import Smile from 'scripts/components/smile';
import { SHOW_SPLASH, SHOW_SMILE } from 'scripts/constants';

const mapStateToProps = (state) => ({
    name: state.userName,
    display: state.view === SHOW_SMILE ? 'block' : 'none'
});

const mapDispatchToProps = dispatch => {
    return {
        callback: () => {
            dispatch(userName(''));
            dispatch(changeView(SHOW_SPLASH));
        }
    };
};

const splash = React => connect(
    mapStateToProps,
    mapDispatchToProps
)(Smile(React));

export default splash;

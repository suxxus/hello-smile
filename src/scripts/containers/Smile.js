import { connect } from 'react-redux';
import { changeView } from 'scripts/actions';
import Smile from 'scripts/components/smile';
import { SHOW_SPLASH } from 'scripts/constants';

const mapStateToProps = (state) => ({
    name: state.name,
    display: state.views.smile ? 'block' : 'none'
});

const mapDispatchToProps = dispatch => {
    return {
        callback: () => {
            dispatch(changeView(SHOW_SPLASH));
        }
    };
};

const splash = React => connect(
    mapStateToProps,
    mapDispatchToProps
)(Smile(React));

export default splash;

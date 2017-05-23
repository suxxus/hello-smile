import { connect } from 'react-redux';
import { changeView } from 'scripts/actions';
import Greet from 'scripts/components/greet';
import { SHOW_SMILE, SHOW_GREET } from 'scripts/constants';

const mapStateToProps = state => ({
    name: state.userName,
    display: state.view === SHOW_GREET ? 'block' : 'none'
});

const mapDispatchToProps = dispatch => {
    return {
        callback: () => {
            dispatch(changeView(SHOW_SMILE));
        }
    };
};

const greet = React => connect(
    mapStateToProps,
    mapDispatchToProps
)(Greet(React));

export default greet;

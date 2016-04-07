import { connect } from 'react-redux';
import { changeView } from 'scripts/actions';
import Greet from 'scripts/components/greet';
import { SHOW_SMILE } from 'scripts/constants';

const mapStateToProps = state => ({
    name: state.name,
    display: state.views.greet ? 'block' : 'none'
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

import { connect } from 'react-redux';
import { logout } from '../data/users/actions';
import Nav from './Nav';

const mapStateToProps = (state)=>({
    currentUserId: state.userReducer.currentUserId
})

const mapDispatchToProps = (dispatch)=>({
    onLogoutLinkClicked: ()=>{
        dispatch(logout());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav);

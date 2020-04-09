import React from 'react';
import { connect } from 'react-redux';

import Aux from '../AuxComponent/AuxComponent';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDrawer: false,
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }   

    sideDrawerToggleHandler = () => {
        this.setState((preState) => {
            return { showSideDrawer: !preState.showSideDrawer};
        });
    }

    render () {
      return (
        <Aux>
						<Toolbar
							isAuth={this.props.isAuthenticated}
							drawerToggleClicked={this.sideDrawerToggleHandler} />
						<SideDrawer 
								isAuth={this.props.isAuthenticated}
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
      );
    }
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.token !== null 
	}
}

export default connect(mapStateToProps)(Layout);
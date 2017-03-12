import React from "react";
import { connect } from "react-redux";

import { User } from '../components/User';
import { Main } from '../components/Main';
import { setName } from "../actions/userActions";


//this is our App component
class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name} />
            </div>
        );
    }
}


//props accessible from reducer -> combinedReducer
//{this.props.user.name} - username props is passed in from Redux state due to mapStateToProps
const mapStateToProps = (state => {
	return {
		user: state.user, 
		math: state.math
	};
});


//receives the dispatch() method and returns callback props that you want to inject into the presentational component
const mapDispatchToProps = (dispath) => {
	return {
		setName: (name) => {
			dispath(setName(name));
		}
	};
};


//connects React and Redux togethers
//connect mapStateToProps, mapDispatchToProps to the App component
//this is a wired up component
export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
// import HomeComponent from './components/home';
import firebase from 'firebase';
import { 
	showAddClient,
	hiddenAddClient
} from './redux/actions';
import config from './config';
import HomeComponent from './components/home';
import ListComponent from './components/shared/list';
// import { USER_CREDENTIALS } from './constants/constants';
// import LaboratoriaServices from './services/services';

// firebase.initializeApp(config);
// const publicationRef = firebase.database();
// const ref =	publicationRef.ref('/');
const storage = window.localStorage;

class App extends Component {
  constructor(props) {
    super(props);

		this.state = {
			publications: [],
			ids: [],
			userNameStoraged: '',
			passwordStoraged: ''
		};
	}
	componentDidMount() {
			// this.validateLogin();
	}
	componentWillMount() {

	}
  componentDidUpdate() {
		
	}
	// getPublicationFirebase = () => {
	// 	ref.on("value", (snapshot) => {
	// 		if (snapshot.val() !== null) {
	// 			return this.setState({publications: Object.values(snapshot.val()), ids: Object.keys(Object.values(snapshot.val())[0]) }, () => {
	// 				this.props.publicationsLoaded();
	// 			})
	// 		}
	// 		return this.setState({publications: []})
	// 	}, (error) => {
	// 		console.log("ERROR: " + error.code);
	// 	});
	// }
	handleChange = (e) => {
		if (e) {
			this.props.resetOptionSelected();
			const value = e.target.value;
			const id = e.target.id;
			return this.props.handleChange(value, id);
		}
		return null;
	}
	showAddClientForm = () => {
		return this.props.showAddClient()
	}
	hiddenAddClientForm = () => {
		return this.props.hiddenAddClient()
	}
	// deletePublication = (publication) => {
	// 	const service = new LaboratoriaServices(ref);

	// 	this.props.deletePublication(publication);
	// 	return	service.deletePublicationDB(publication);
	// }


	
  render() {
    const { client, showAdd } = this.props;

		return (
			<div className="App container-fluid" 
			>
        <div className="row">
          <div className="col-6">            
            <HomeComponent newClient={client} showAddClient={showAdd} hiddenAddClient={this.hiddenAddClientForm} />
            <div className="row buttons">
              <button class="add-client" onClick={this.showAddClientForm}>AGREGAR CLIENTE</button>
              {/* <button class="add-client" onClick={this.toggleAddClient}>CANCELAR</button> */}
            </div>
          </div>
          <div className="col-6">
            <ListComponent />
          </div>
        </div>		
  		</div>
  );  
}

}
const mapStateToProps = (state) => {
  return {
		client: state.intercorp.client,
		showAdd: state.intercorp.showAdd
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
		showAddClient: () => { dispatch(showAddClient()) },
		hiddenAddClient: () => { dispatch(hiddenAddClient()) },
    }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
// import HomeComponent from './components/home';
import firebase from 'firebase';
import { 
	showAddClient,
	hiddenAddClient,
	handleChange,
	addClient,
	deleteClient,
	resetValues,
	updateClients
} from './redux/actions';
import config from './config';
import HomeComponent from './components/home';
import ListComponent from './components/shared/list';
// import { USER_CREDENTIALS } from './constants/constants';
import IntercorpRetailServices from './services/services';

firebase.initializeApp(config);
const publicationRef = firebase.database();
const ref =	publicationRef.ref('/');
// const storage = window.localStorage;

class App extends Component {
  constructor(props) {
    super(props);

		this.state = {
			clients: [],
			ids: []
		};
	}
	componentDidMount() {
			// this.validateLogin();
			this.getClientsFirebase();
	}
	componentWillMount() {

	}
  componentDidUpdate() {
		console.log(this.props.clients)
		if (this.props.clients && this.props.clients.length) {
			this.calculateEstimatedAge()
		}
		
	}
	getClientsFirebase = () => {
		ref.on("value", (snapshot) => {
			if (snapshot.val() !== null) {
				let clientsAux = Object.values(snapshot.val()) && Object.values(snapshot.val())[0];
				clientsAux = Object.values(clientsAux)
				const idsAux = Object.keys(Object.values(snapshot.val())[0]);
				console.log(idsAux)
				clientsAux = clientsAux.map((client, index) => {
					if (idsAux && idsAux.length) {
							// idsAux.forEach(id => {
							client.client.id = idsAux[index]
							// })
					}
					return client.client;
				})
				console.log(clientsAux)
				return this.props.updateClients(clientsAux)
			}
			return this.props.updateClients([])
		}, (error) => {
			console.log("ERROR: " + error.code);
		});
	}
	handleChange = (e) => {
		console.log(e)
		if (e) {
			// this.props.resetOptionSelected();
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
	addClient = () => {
		if (this.props.client &&
			this.props.client.names &&
			this.props.client.lastNames &&
			this.props.client.age &&
			this.props.client.date) {
				const service = new IntercorpRetailServices(ref);
				
				this.props.resetValues();
				return service.saveClient(this.props.client)
			}
			else return alert('Todos los campos son requeridos')
	}
	deleteClient = (client, position) => {
		const service = new IntercorpRetailServices(ref);
	
		this.props.deleteClient(client, position);
		return service.deleteClientDB(client);
	}

	calculateEstimatedAge = () => {
		if (this.props.clients) {
			const ages = this.props.clients.map(client => {
				client.age = Number(client.age);
				return client.age;
			})
			if (ages.length > 0) {
				const acum = ages.reduce((a,b) => a + b);
				console.log(acum)
				return acum/this.props.clients.length;
			}
		}
		return null;
	}

  render() {
    const { client, showAdd, clients } = this.props;
		console.log(clients)
		console.log(this.state.clients)
		console.log(this.state.ids)
		const ageAverage = this.calculateEstimatedAge();
		console.log(ageAverage)
		return (
			<div className="App container-fluid" 
			>
        <div className="row">
          <div className="col-6">
            <HomeComponent client={client} showAddClient={showAdd} hiddenAddClient={this.hiddenAddClientForm} handleChange={this.handleChange} addClient={this.addClient} />
            <div className="row buttons">
              {!showAdd && <button class="add-client" onClick={this.showAddClientForm}>AGREGAR CLIENTE</button>}
              {/* <button class="add-client" onClick={this.toggleAddClient}>CANCELAR</button> */}
            </div>
          </div>
          <div className="col-6 left-side">
						{ageAverage && <span>EL promedio de edad es de: {ageAverage}</span>}
            <ListComponent clients={clients} deleteClient={this.deleteClient} />
          </div>
        </div>		
  		</div>
  );  
}

}
const mapStateToProps = (state) => {
  return {
		client: state.intercorp.client,
		clients: state.intercorp.clients,
		showAdd: state.intercorp.showAdd,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
		showAddClient: () => { dispatch(showAddClient()) },
		hiddenAddClient: () => { dispatch(hiddenAddClient()) },
		handleChange: (value, id) => { dispatch(handleChange(value, id)) },
		addClientForm: (client) => { dispatch(addClient(client)) },
		deleteClient: (client, position) => { dispatch(deleteClient(client, position)) },
		resetValues: () => { dispatch(resetValues()) },
		updateClients: (newListClients) => { dispatch(updateClients(newListClients)) },
    }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

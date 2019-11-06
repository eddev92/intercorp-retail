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

class App extends Component {
  constructor(props) {
    super(props);

		this.state = {
			clients: [],
			ids: []
		};
	}
	componentDidMount() {
			this.getClientsFirebase();
	}
  componentDidUpdate() {
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

				clientsAux = clientsAux.map((client, index) => {
					if (idsAux && idsAux.length) {
						let dateAux = client.client.date.split("-");
							client.client.id = idsAux[index];
							dateAux = dateAux.reverse();
							dateAux = dateAux.join("-");
							client.client.date = dateAux;
					}
					return client.client;
				})
				return this.props.updateClients(clientsAux)
			}
			return this.props.updateClients([])
		}, (error) => {
			console.log("ERROR: " + error.code);
		});
	}
	handleChange = (e) => {
		if (e) {
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

				return acum/this.props.clients.length;
			}
		}
		return null;
	}
	showProbability = (client) => {
		return alert(`La probabilidad de muerte de esta persona es dentro de ${75 - client.age} años`)
	}
  render() {
    const { client, showAdd, clients } = this.props;
		const ageAverage = this.calculateEstimatedAge();

		return (
			<div className="App container-fluid" 
			>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <HomeComponent client={client} showAddClient={showAdd} hiddenAddClient={this.hiddenAddClientForm} handleChange={this.handleChange} addClient={this.addClient} />
            <div className="row buttons">
              {!showAdd && <button className="add-client" onClick={this.showAddClientForm}>AGREGAR CLIENTE</button>}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 left-side">
						{ageAverage && <span>EL promedio de edad es de: {Math.round(ageAverage)}</span>}
            <ListComponent clients={clients} deleteClient={this.deleteClient} showProbability={this.showProbability} />
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

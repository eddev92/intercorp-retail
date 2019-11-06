class IntercorpRetailServices {
  constructor(ref) {
    this.ref = ref;
  }
	deleteClientDB = (client) => {
		const clientsRef = this.ref.child("clients");
		return clientsRef.child(client.id).remove();
  }
  
	updateClientDB = (id, client) => {
		const clientsRef = this.ref.child("clients");

		return clientsRef.child(id).child('client').update(client);
  }
  
  saveClient = (client) => {
		const clientsRef = this.ref.child("clients");
		return clientsRef.push({client});
	}
}

export default IntercorpRetailServices;

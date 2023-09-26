const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			titulo: 'Hola Mundo',
			users: [],
			demo: [{title: "FIRST",
							background: "white",
							initial: "white"},
 						 {title: "SECOND",
							background: "white",
							initial: "white"}]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getUsers: async () => {
				const url = 'https://playground.4geeks.com/apis/fake/contact/agenda/spain46';
				const options = {
					method : 'GET'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({users: data })
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			addContact: async (newUser) => {
				const url = 'https://playground.4geeks.com/apis/fake/contact/';
				const options = {
					method: 'POST',
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(newUser)
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
					getActions().getUsers();
				} else {
					console.log('Error', response.status, response.statusText)
				}
			},
			deleteContact: async (id) => {
				const url = 'https://playground.4geeks.com/apis/fake/contact/' + id;
				const options = {
					method: 'DELETE'
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log(data);
				} else { m
					console.log('Error', response.status, response.statusText)
				}
			}
		},
	};
};

export default getState;
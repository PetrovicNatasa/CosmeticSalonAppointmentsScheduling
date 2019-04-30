class Client {
    constructor(name, surname, username, email, password) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = sha512(password);
    }

    static getClientsArray() {
        let clientsJson = localStorage.getItem('clients');
        return clientsJson ? JSON.parse(clientsJson) : [];
    }

    static isUsernameExists(username) {
        let clientsArray = Client.getClientsArray();
        for (let existingClient of clientsArray) {
            if (existingClient.username === username) {
                return true;
            }            
        }
        return false;
    }

    static isEmailExists(email) {
        let clientsArray = Client.getClientsArray();
        for (let existingClient of clientsArray) {            
            if (existingClient.email === email) {
                return true;
            }            
        }
        return false;
    }

    static addAndSaveClient(client) {
        let clientsArray = Client.getClientsArray();
        clientsArray.push(client);
        let clientsJson = JSON.stringify(clientsArray);
        localStorage.setItem('clients', clientsJson);        
    }    
}

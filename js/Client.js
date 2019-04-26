class Client {
    constructor(name, surname, username, email, password) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = sha512(password);
    }

    static isUsernameExists(username, clientsArray) {
        for (let existingClient of clientsArray) {
            if (existingClient.username === username) {
                return true;
            }            
        }
        return false;
    }

    static isEmailExists(email, clientsArray) {
        for (let existingClient of clientsArray) {            
            if (existingClient.email === email) {
                return true;
            }            
        }
        return false;
    }

    static getClientsArray() {
        let clientsJson = localStorage.getItem('clientsJson');
        return clientsJson ? JSON.parse(clientsJson) : [];
    }

    static addAndSaveClient(client, clientsArray) {
        clientsArray.push(client);
        let clientsJson = JSON.stringify(clientsArray);
        localStorage.setItem('clientsJson', clientsJson);        
    }    
}

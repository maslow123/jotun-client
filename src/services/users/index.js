export default class Users {
    constructor() {};

    register = async (payload) => {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8080/api/v1/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(res => {
                res.json()
                .then(data => {
                    if(data.code === 201) {
                        return resolve(data);
                    }
                    resolve(data);
                });
            })
            .catch(err => {
                resolve(err);
            });
        })
    };

    login = async (payload) => {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8080/api/v1/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(res => {
                res.json()
                .then(data => {
                    if(data.code === 200) {
                        return resolve(data);
                    }
                    reject(data);
                });
            })
            .catch(err => {
                reject(err);
            });
        })
    }
}
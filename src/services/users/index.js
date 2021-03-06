export default class Users {

    constructor() {};

    register = async (payload) => {
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_SERVICE_URL}/user/register`, {
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
            fetch(`${process.env.REACT_APP_SERVICE_URL}/user/login`, {
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
    };

    loginHelpdesk = async (payload) => {
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_SERVICE_URL}/user/helpdesk/login`, {
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

    list = async () => {
        const token = localStorage.getItem('token');
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_SERVICE_URL}/user/list`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                res.json()
                .then(data => {
                    if(data.code === 200) {
                        return resolve(data);
                    }
                    reject(data);
                })
                .catch(err => {                    
                    window.location.href = '/helpdesk';
                })
            })
            .catch(err => {
                reject(err);
            });
        })
    };

    update = async (payload) => {
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_SERVICE_URL}/user/update`, {
                method: 'PUT',
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
                    reject(data);
                });
            })
            .catch(err => {
                reject(err);
            });
        })
    }
}
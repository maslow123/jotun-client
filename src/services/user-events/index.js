export default class UserEvents {
    constructor() {};    

    getBySubEventID = async (subEventID) => {
        const token = localStorage.getItem('token');
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_SERVICE_URL}/user-event/get/${subEventID}`, {
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
                });
            })
            .catch(err => {
                reject(err);
            });
        })
    };
    create = async (payload) => {
        const token = localStorage.getItem('token');
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_SERVICE_URL}/user-event/create`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
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
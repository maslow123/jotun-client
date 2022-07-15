export default class Users {
    constructor() {};

    doScan = async (payload) => {
        return new Promise((resolve, reject) => {
            fetch(`${process.env.REACT_APP_SERVICE_URL}/scan-info/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(res => {
                res.json()
                .then(data => {
                    if(data.status === 200) {
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
}
export default class Master {
    constructor() {};    

    list = async () => {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8080/api/v1/master/list`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
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
    }
}
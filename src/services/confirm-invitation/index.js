export default class ConfirmInvitation {
    constructor() {};

    resend = async (payload) => {
        return new Promise((resolve, reject) => {
            fetch(`http://localhost:8080/api/v1/confirm-invitation/resend`, {
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
}
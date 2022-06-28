import { toast } from 'react-toastify';

const validate = (payload ) => {
    const key = Object.keys(payload);
    let errors = [];

    key.map(prop => {        
        if (payload[prop]?.length < 1 || payload[prop] === null) {
            errors = [...errors, prop];
        } 
        if (prop === 'confirm_phone_number' && (payload[prop] !== payload['phone_number'])) {
            errors = [...errors, 'phone-number-not-match'];
        }                       
    });

    return errors;
};

const showToast = (type, message, config) => {    
    toast[type](message, config);
};

export  { validate, showToast };
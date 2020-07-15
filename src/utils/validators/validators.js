export const required = value => {
    if(value) return undefined;

    return 'Field is required'
};


export const maxLenghtCreator = maxLength => value => {
    if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
};


export const minLenghtCreator = minLength => value => {
    if(value && value.length < minLength) return `Max length is ${minLength} symbols`;
    return undefined
};

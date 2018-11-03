export function isValidUserDataRegistration(body) {
    return (
        isValidUserDataLogin(body)
        && ('name' in body) 
        && body.name !== undefined
        && body.name !== ''
    );
}


export function isValidUserDataLogin(body) {
    return (
        ('email' in body) 
        && ('password' in body)
        && body.email !== undefined
        && body.email !== ''
        && body.password !== undefined
        && body.password !== ''
    );
}
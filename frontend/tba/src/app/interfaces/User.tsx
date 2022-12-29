export default interface User {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    country: string,
    email: string
}

export const defaultUser:User = {
    username:"",
    password:"",
    firstname:"",
    lastname:"",
    country:"",
    email:""
}
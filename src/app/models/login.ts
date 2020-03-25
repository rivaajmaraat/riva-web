export class Login{
    loginId: number; // Probably needs JsonIgnore in backend
    userName: string;
    password: string;
    dateCreated: Date; // Probably needs JsonIgnore in backend
    lastLogin: Date;
    status: number; // Probably needs JsonIgnore in backend
}
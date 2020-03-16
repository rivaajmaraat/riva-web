export class Login{
    LoginId: number; // Probably needs JsonIgnore in backend
    UserName: string;
    Password: string;
    DateCreated: Date; // Probably needs JsonIgnore in backend
    LastLogin: Date;
    Status: number; // Probably needs JsonIgnore in backend
}
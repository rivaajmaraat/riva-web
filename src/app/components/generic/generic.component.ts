import { AuthService } from 'src/app/services/auth.service';

export abstract class GenericComponent{
    constructor(public authService: AuthService){}
}
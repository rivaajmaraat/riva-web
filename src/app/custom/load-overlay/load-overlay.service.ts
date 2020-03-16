import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadService {
    private subject = new Subject<boolean>();
    
    onLoad(): Observable<boolean>{
        return this.subject.asObservable();
    }

    load(load: boolean){
        this.subject.next(load);
    }
}
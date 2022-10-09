import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import IUserState from 'src/app/models/IUserState';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public state: BehaviorSubject<IUserState>  = new BehaviorSubject<IUserState>({
    _id: '',
    email:'',
    phoneNumber: '',
    fullName:'',
    role: '',
    token: '',
    lat :'',
    long: '',
    owner: ''
  });

  constructor(private http: HttpClient) {
    this.state = new BehaviorSubject<IUserState>(JSON.parse(localStorage.getItem('APP_STATE')!));
  }

  login(obj: {email: string, password: string}){
    return this.http.post<{success: boolean, data: string}>(environment.urls.api + 'login', obj)
  }

  logout(): void {
    localStorage.removeItem('APP_STATE');
    this.state.next({
            _id: '',
            email:'',
            phoneNumber: '',
            fullName:'',
            role: '',
            token: '',
            lat :'',
            long: '',
            owner: ''
            } as IUserState);
  }
}

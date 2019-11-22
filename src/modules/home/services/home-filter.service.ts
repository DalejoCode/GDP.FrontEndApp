import { Injectable } from '@angular/core';
import { HttpRequesterService } from '@services/http-requester.service';
import { environment } from '@envs/environment';
import { Observable } from 'rxjs';
import { IUserModel } from '../models/user-model';
import { LoginViewModel } from '../models/user-login-data';

@Injectable({
  providedIn: 'root'
})
export class HomeFilterService {
  constructor(private httpRequester: HttpRequesterService) { }
}

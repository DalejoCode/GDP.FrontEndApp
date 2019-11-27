import { Injectable } from '@angular/core';
import { HttpRequesterService } from '@services/http-requester.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpRequester: HttpRequesterService) { }
}

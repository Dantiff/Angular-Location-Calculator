import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API_URL = 'https://technekes.mockable.io';

  constructor(private httpClient: HttpClient) {}

  calculateLocation(payload){
    return this.httpClient.post(`${this.API_URL}/ngc-calculator-api/calculations`, payload);
  }
}

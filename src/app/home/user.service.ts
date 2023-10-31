import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  clientID='9d21ff106d03dfb6f47f';
  clientSecret='ec6a7ad0e2f07fa0fd7d993b4a21dedb3beabbe8';

  constructor(private _httpClient: HttpClient) { }
  getAllUsers() {
    return this._httpClient.get(environment.apiUrl+'?client_id='+this.clientID+'&client_secret='+this.clientSecret+'?per_page=10')
    
  }
  getSingleUser(username: string) {
    return this._httpClient.get(environment.apiUrl+'/'+username+'?client_id='+this.clientID+'&client_secret='+this.clientSecret)
  
}

}

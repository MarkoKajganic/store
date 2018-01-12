import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class BuyersService {

  constructor(private _httpClient: HttpClient) {

   }


   public getBuyers(){

    return this._httpClient.get<any[]>('http://localhost:8000/buyers.php');

  }

}

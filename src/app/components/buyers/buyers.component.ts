import { Component, OnInit } from '@angular/core';
import {BuyersService} from '../../services/buyers.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {

  buyers = [];
  searchTerm = ""; //vrednost koju prosledjujemo pipe-u Filter
  

  constructor(private _buyersService: BuyersService) {
    this._buyersService.getBuyers().subscribe(buyers => {
      this.buyers = buyers;
      // console.log(buyers);
    });
  }

  removeBuyer(buyer)
  {
    let index = this.buyers.indexOf(buyer);
    this.buyers.splice(index, 1);
  }

  ngOnInit() {
  }

}

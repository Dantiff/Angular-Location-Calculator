import { Component, OnInit } from '@angular/core';

import { APIService } from '../api.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class Calculator implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.calculateLocation();
  }

  public calculateLocation(){
    this.apiService
      .calculateLocation({})
      .subscribe((response) => {
        console.log(response);
      });
  }

}

import { Component, OnInit } from '@angular/core';

import { APIService } from '../api.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
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

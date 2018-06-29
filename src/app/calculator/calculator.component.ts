import { Component, OnInit } from '@angular/core';

import { APIService } from '../api.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class Calculator implements OnInit {

  public form = {
    union_check: false,
    location: '',
    square_footage: '',
    calculator_type: 'gold_bond',
  };

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.calculateLocation(this.form);
  }

  public calculateLocation(form){
    this.apiService
      .calculateLocation(form)
      .subscribe((response) => {
        console.log(response);
      });
  }

}

import { Component, OnInit } from '@angular/core';

import { APIService } from '../api.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class Calculator implements OnInit {

  public calculating:Boolean = false;
  public form = {
    union_check: false,
    location: '',
    square_footage: '',
    calculator_type: 'gold_bond',
  };
  public grids = [
    { data: {}, type: 'Vertical' },
    { data: {}, type: 'Horizontal' },
  ];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.calculateLocation(this.form);
  }

  public calculateLocation(form){
    this.calculating = true;
    this.apiService
      .calculateLocation(form)
      .subscribe((response) => {
        this.calculating = false;
        console.log('the api response', this.calculating, response);
        this.grids.forEach(g => {
          switch (g.type) {
            case "Vertical":
              g.data = response.GoldBondCalculation.vertical;
              break;
            case "Horizontal":
              g.data = response.GoldBondCalculation.horizontal;
              break;            
            default:
              g.data = '';
              break;
          }
        })
      });
  }
  public transformData(unit, data) {
    switch (unit) {
      case 1:
        return {
                title: 'Labour',
                ngc1: data.national_gypsum.labor_cost_per_square_foot,
                ngc2: data.national_gypsum.extended_labor_cost,
                cmp1: data.competitor.labor_cost_per_square_foot,
                cmp2: data.competitor.extended_labor_cost,
                phrase: 'labour',
                save1: data.total_savings.labor_cost_per_square_foot_percentage,
                save2: data.total_savings.extended_labor_cost,
              };
      case 2:
        return {
                title: 'Screws',
                ngc1: data.national_gypsum.average_total_screws,
                ngc2: data.national_gypsum.extended_screw_cost,
                cmp1: data.competitor.average_total_screws,
                cmp2: data.competitor.extended_screw_cost,
                phrase: 'labour',
                save1: data.total_savings.average_total_screws_percentage,
                save2: data.total_savings.extended_screw_cost,
              };
      case 3:
        return {
                title: 'Sports Fasteners Labour',
                ngc1: data.national_gypsum.spot_fastener_labor_cost_per_square_foot,
                ngc2: data.national_gypsum.spot_fastener_extended_labor_cost,
                cmp1: data.competitor.spot_fastener_labor_cost_per_square_foot,
                cmp2: data.competitor.spot_fastener_extended_labor_cost,
                phrase: 'labour',
                save1: data.total_savings.spot_fastener_labor_cost_per_square_foot_percentage,
                save2: data.total_savings.spot_fastener_extended_labor_cost,
              };
      case 4:
        return {
                title: 'Sports Fasteners Material',
                ngc1: data.national_gypsum.spot_fastener_material_cost_per_square_foot,
                ngc2: data.national_gypsum.spot_fastener_extended_material_cost,
                cmp1: data.competitor.spot_fastener_material_cost_per_square_foot,
                cmp2: data.competitor.spot_fastener_extended_material_cost,
                phrase: 'labour',
                save1: data.total_savings.spot_fastener_material_cost_per_square_foot_percentage,
                save2: data.total_savings.spot_fastener_extended_material_cost,
              };
      
      default:
        return {};
        break;
    }
  }

}

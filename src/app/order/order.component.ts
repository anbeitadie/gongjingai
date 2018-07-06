import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input()
  stockCode: string;
  @Input()
  amount: number;
  constructor(routeInfo: ActivatedRoute) {
    setInterval(() => {
      this.stockCode = 'Apple';
    }, 3000);
  }

  ngOnInit() {
  }

}

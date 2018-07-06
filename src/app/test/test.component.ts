import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  stock = '';

  private url = 'http://10.1.55.232:8080/api/article';
  dataSource: Observable<any>;
  products: Array<any> = [];
  constructor(private http: Http) {
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'Batic 123456');
    this.dataSource = this.http.get(this.url, {headers: myHeaders})
      .map((res) => res.json());
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => {
        this.products = data['articlelist'];

        console.log(this.products);
      }

    );
  }
  OnSubmit(value: any, valid: boolean) {
    console.log(valid);
    console.log(value);
  }

}

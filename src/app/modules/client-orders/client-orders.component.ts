import { Component, OnInit } from '@angular/core';
import { ClientOrders, ClientOrdersService } from 'src/app/services/client-orders.service';

@Component({
  selector: 'app-client-orders',
  templateUrl: './client-orders.component.html',
  styleUrls: ['./client-orders.component.scss']
})
export class ClientOrdersComponent implements OnInit {

  clientOrders: ClientOrders[] =[];

  constructor(private clientOrdersService: ClientOrdersService) { }

  ngOnInit(): void {
    this.clientOrdersService.getClientOrders().subscribe(response => {
      this.clientOrders = response;
    //console.log(this.clientOrders);
    });
  //setTimeout(() => {console.log(JSON.stringify(this.clientOrders, null, "  "));}, 1000);
  }
}

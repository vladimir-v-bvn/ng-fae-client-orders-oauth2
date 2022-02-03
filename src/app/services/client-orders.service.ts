import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface ClientOrders {
  userId: number
  userName: string
  userGroup: string
  eventName: string
  orderId: number
  amount: number
  price: number
}

@Injectable({providedIn: 'root'})

export class ClientOrdersService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9090/api/v1/clientorders'
  getClientOrders(): Observable<ClientOrders[]> {
  //this.http.get<ClientOrders[]>(this.url).subscribe(co => console.log(uo));
    return this.http.get<ClientOrders[]>(this.url)
  }
}

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ClientOrdersTableDataSource } from './client-orders-table-datasource';
import { ClientOrders, ClientOrdersService } from 'src/app/services/client-orders.service';

@Component({
  selector: 'app-client-orders-table',
  templateUrl: './client-orders-table.component.html',
  styleUrls: ['./client-orders-table.component.scss']
})
export class ClientOrdersTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ClientOrders>;
  dataSource: ClientOrdersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['userId', 'userName', 'userGroup', 'eventName', 'orderId', 'amount', 'price'];

  constructor(private clientOrdersService: ClientOrdersService) {
    this.dataSource = new ClientOrdersTableDataSource();
  }

  ngOnInit(): void {
    this.clientOrdersService.getClientOrders().subscribe(response => {
      this.dataSource.data  = response;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    //console.log(this.clientOrders);
    });
    //setTimeout(() => {console.log(JSON.stringify(this.dataSource.data, null, "  "));}, 1000);
}

  ngAfterViewInit(): void {

  }
}

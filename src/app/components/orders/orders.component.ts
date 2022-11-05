import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { _MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/services/customer-service/customer.service';
import { IProduct } from 'src/app/models/iProducts';
import { ProductService } from 'src/app/services/product-service/product.service';
import { IOrder } from 'src/app/models/iorder';
import { OrderService } from 'src/app/services/order-service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  listOfOrders: IOrder[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loading: boolean = true;
  selected = '1';
  constructor(
    private orderService : OrderService,
  ) {
  }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((orders) => {
      this.listOfOrders = orders;
      console.log(orders);
      this.loading = false;
    });
  }
}

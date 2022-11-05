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

@Component({
  selector: 'app-procucts',
  templateUrl: './procucts.component.html',
  styleUrls: ['./procucts.component.scss'],
})
export class ProductsComponent implements OnInit {
  listOfProducts: IProduct[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loading: boolean = true;
  selected = '1';
  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((users) => {
      this.listOfProducts = users;
      console.log(users);
      this.loading = false;
    });
  }
}

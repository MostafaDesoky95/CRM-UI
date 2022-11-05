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
import { ICustomer } from '../../models/icustomer';
import { CustomerService } from 'src/app/services/customer-service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  listOfCustomers: ICustomer[] = [];
  // listOfAdmins: IAdmin[] = [];
  // listOfNonAdmins: IAdmin[] = [];
  searchText: string;
  displayedColumns: string[] = [
    'ID',
    'FirstName',
    'LastName',
    'Email',
    'PhoneNumber',
    'IsActive'
  ];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loading: boolean = true;
  selected = '1';
  constructor(
    private customerService: CustomerService,
    // private adminService: AdminService,
    private dialog: MatDialog
  ) {
    this.searchText = '';
  }

  ngOnInit(): void {
    console.log("ra7");

    this.customerService.getAllCustomers().subscribe((users) => {
      this.listOfCustomers = users;
      console.log(users);
      this.dataSource = new _MatTableDataSource(this.listOfCustomers);
      this.dataSource.paginator = this.paginator;
      this.loading = false;
    });
    // this.adminService.getAdmins.subscribe((admins) => {
    //   this.listOfAdmins = admins;
    // });
  }
ChangeActivation(id:any,event :any){
  this.customerService.changeActivation(id).subscribe(() =>
      console.log(event)

    // this.listOfCustomers.find(x=>x.id == id).isActive = !this.listOfCustomers.find(x=>x.id == id).isActive
    )
}
  changeViewedList() {
    if (this.selected == '1') {
      this.dataSource = new _MatTableDataSource(this.listOfCustomers);
    } else if (this.selected == '2') {
    //   this.dataSource = new _MatTableDataSource(this.listOfAdmins);
    // } else if (this.selected == '3') {
    //   this.listOfNonAdmins = this.listOfCustomers.filter(
    //     (user) => !this.adminService.getAdminsIds.includes(user.ID)
    //   );
    //   this.dataSource = new _MatTableDataSource(this.listOfNonAdmins);
    // }
    this.dataSource.paginator = this.paginator;
    this.searchText = '';
  }
  
  
  }
}

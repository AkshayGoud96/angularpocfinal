import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomeComponent } from '../home/home.component';
import { SummarydailogComponent } from '../summarydailog/summarydailog.component';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  isValidCustomer: boolean = false
  isSubmitted = false
  user = { lan: "", pan: "" }
  customer = {}
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }
  onValidate(user) {
    this.isValidCustomer = this.customerService.validateCustomer(user.lan, user.pan);
    if (this.isValidCustomer) {
      this.customer = this.customerService.getCustomer()
    }
    this.isSubmitted = true;
    //this.onValidated.emit(this.isValidCustomer)
  }

}

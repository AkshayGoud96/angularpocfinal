import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: any
  selectedUser = null
  constructor(private customerService: CustomerService) { 
    
  }

  ngOnInit() {
    this.selectedUser = this.customerService.getCustomer()
  }
  isValidUser(){
    this.selectedUser != null
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {CustomerService} from '..customer.service/'
import { CustomerService } from '../customer.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-validate-user',
  templateUrl: './validate-user.component.html',
  styleUrls: ['./validate-user.component.css']
  
})

export class ValidateUserComponent implements OnInit {
  @Output() onValidated = new EventEmitter();
  isValidCustomer: boolean = false
  isSubmitted = false
  user = { lan: "", pan: "" }
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }
  onValidate(user) {
    this.isValidCustomer = this.customerService.validateCustomer(user.lan, user.pan);
    this.isSubmitted = true;
     this.onValidated.emit(this.isValidCustomer)
  }

}

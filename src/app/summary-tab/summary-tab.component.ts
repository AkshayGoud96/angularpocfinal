import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.css']
})
export class SummaryTabComponent implements OnInit {
  @Input() summary: any;
  constructor() { }
  transactions = []
  trasactionsColums = [];

  serviceRequests = []
  serviceRequestsColumns = []

  loanDetails=[]
  loanDetailsColums = []
  ngOnInit() {
    this.transactions = this.summary.transactions;
    this.trasactionsColums = ['srNo', 'transactionDate', 'emiDueDate', 'status']

    this.serviceRequests = this.summary.serviceRequest
    this.serviceRequestsColumns = ['srNo', 'srId', 'status', 'callType', 'subyType', 'comments']

    this.loanDetails=this.summary.loanDetails
    this.loanDetailsColums = ['srNo', 'lan', 'customerName', 'mobile', 'loanTenure', 'roi','status' ]
  }
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },

  ];



}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
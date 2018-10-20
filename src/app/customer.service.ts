import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private availableCustomers: any = []
  private selectedCustomer: any = null
  constructor() {
    this.availableCustomers = [
      {
        "lan": "123",
        "pan": "123",
        "dob": "123",
        "sanctionId": "",
        "crmNext": {
          "customerName": "Prachi Atul shah",
          "mobile": "9870917980",
          "status": "Complete",
          "email": "shahprachi2892@gmail.com",
          "createdOn": "21st August 2018",
          "isActive": "Yes",

          "summaryPage": {
            "transactions": [{
              "srNo": 1,
              "transactionDate": "12/12/12",
              "emiDueDate": "12/12/14",
              "status": "In Progress"
            }, {
              "srNo": 1,
              "transactionDate": "12/12/12",
              "emiDueDate": "12/12/14",
              "status": "In Progress"
            }, {
              "srNo": 1,
              "transactionDate": "12/12/12",
              "emiDueDate": "12/12/14",
              "status": "In Progress"
            }],

            "name": "",
            "dob": "",
            "pan": "",
            "customerId": "",
            "lan": "",
            "address": "",
            "emailId": "",
            "mobileNo": "",
            "nominee": "",
            "principalAmount": "",
            "loanAmount": "",
            "typeOfRoi": "",
            "emiDate": "",
            "installmentPaid": "",
            "insurancePolicy": "",
            "waiver": "",
            "soa": "",
            "ndl": "",

            
            "loanDetails": [
              {
                "srNo": "1",
                "lan": "123",
                "customerName": "vijay",
                "mobile": "12121212",
                "loanTenure": "200",
                "roi": "18",
                "status": 1,
              },
              {
                "srNo": "2",
                "lan": "1234",
                "customerName": "Ajay",
                "mobile": "9020920922",
                "loanTenure": "200",
                "roi": "58",
                "status": 1,
              }],
            "serviceRequest": [{
              "srNo": 1,
              "srId": 3,
              "status": "Sent for Retention",
              "callType": "Request",
              "subyType": "Foreclosure",
              "comments": "Cloasure of loan",
            }, {
              "srNo": 2,
              "srId": 2,
              "status": "Assign to IT",
              "callType": "Query",
              "subyType": "Disbursement",
              "comments": "Payment not Reflected",
            }]

          },

          "crmNext": {},
          "finOne": {},
          "qlikView": {},
          "ic4": {},
          "omniDocs": {},
          "sharedFolder": {}

        },

        "brNet": {
          "customerName": "Prachi Atul shah",
          "mobile": "9870917980",
          "status": "Complete",
          "email": "shahprachi2892@gmail.com",
          "createdOn": "21st August 2018",
          "isActive": "Yes",

          "summaryPage": {
            "transactions": [{
              "srNo": 1,
              "transactionDate": "12/12/12",
              "emiDueDate": "12/12/14",
              "status": "In Progress"
            }, {
              "srNo": 1,
              "transactionDate": "12/12/12",
              "emiDueDate": "12/12/14",
              "status": "In Progress"
            }, {
              "srNo": 1,
              "transactionDate": "12/12/12",
              "emiDueDate": "12/12/14",
              "status": "In Progress"
            }],

            "name": "",
            "dob": "",
            "pan": "",
            "customerId": "",
            "lan": "",
            "address": "",
            "emailId": "",
            "mobileNo": "",
            "nominee": "",
            "principalAmount": "",
            "loanAmount": "",
            "typeOfRoi": "",
            "emiDate": "",
            "installmentPaid": "",
            "insurancePolicy": "",
            "waiver": "",
            "soa": "",
            "ndl": "",
            "loanDetails": [
              {
                "srNo": "1",
                "lan": "123",
                "customerName": "vijay",
                "mobile": "12121212",
                "loanTenure": "200",
                "roi": "18",
                "status": 1,
              },
              {
                "srNo": "2",
                "lan": "1234",
                "customerName": "Ajay",
                "mobile": "9020920922",
                "loanTenure": "200",
                "roi": "58",
                "status": 1,
              }],
            "serviceRequest": [{
              "srNo": 1,
              "srId": 3,
              "status": "Sent for Retention",
              "callType": "Request",
              "subyType": "Foreclosure",
              "comments": "Cloasure of loan",
            }, {
              "srNo": 2,
              "srId": 2,
              "status": "Assign to IT",
              "callType": "Query",
              "subyType": "Disbursement",
              "comments": "Payment not Reflected",
            }]

          },

          "brNet": {},
          "brmfo": {},
          "sharedFolder": {}

        }
      },
      {
        lan: "1234",
        pan: "1234"
      }]
    this.selectedCustomer = {}
  }

  validateCustomer(lan, pan) {
    const filterd = this.availableCustomers.filter(cust => {
      return cust.lan == lan && cust.pan == pan;
    });
    if (filterd.length > 0) {
      this.selectedCustomer = filterd[0]
      return true
    }
    else {
      return false;
    }
  }
  getCustomer() {
    return this.selectedCustomer;
  }
}

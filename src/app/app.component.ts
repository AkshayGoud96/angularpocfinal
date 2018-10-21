import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  navItems: any[] = [
    { name: "Customers", route: "dashboard" ,icon :"contact_phone"},
    { name: "Sales", route: "sales" ,icon :"assessment"},
    { name: "Calculator", route: "calculator", icon :"dialpad" },
    { name: "Admin", route: "admin" ,icon :"web"},
  ];
  constructor(public title: Title) {}

  ngOnInit() {
    this.title.setTitle("ValueMomentum (POC)");
  }
}

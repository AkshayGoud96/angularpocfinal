import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  navItems: any[] = [
    { name: "Dashboard", route: "dashboard" ,icon :"contact_phone"},
    { name: "Admin", route: "admin" ,icon :"web"},
    { name: "Sales", route: "sales" ,icon :"assessment"},
    { name: "Calculator", route: "calculator", icon :"dialpad" }
  ];
  constructor(public title: Title) {}

  ngOnInit() {
    this.title.setTitle("ValueMomentum (POC)");
  }
}

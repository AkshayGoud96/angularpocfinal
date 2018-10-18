import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  navItems: any[] = [
    { name: "Dashboard", route: "dashboard" },
    { name: "Admin", route: "admin" },
    { name: "Sales", route: "sales" },
    { name: "Calculator", route: "calculator" }
  ];
  constructor(public title: Title) {}

  ngOnInit() {
    this.title.setTitle("ValueMomentum (POC)");
  }
}

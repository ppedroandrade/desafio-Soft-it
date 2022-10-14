import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-clients-crud",
  templateUrl: "./clients-crud.component.html",
  styleUrls: ["./clients-crud.component.css"],
})
export class ClientsCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToRegisterClient(): void {
    this.router.navigate(["/register"]);
  }
}

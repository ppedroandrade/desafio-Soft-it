import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Client } from "../client.model";
import { ClientService } from "./../client.service";

@Component({
  selector: "app-register-client",
  templateUrl: "./register-client.component.html",
  styleUrls: ["./register-client.component.css"],
})
export class RegisterClientComponent implements OnInit {
  client: Client = {
    name: "",
    cpfCnpj: null,
    cep: null,
    adress: "",
    bairro: "",
    city: "",
    cellphone: null,
    email: "",
  };
  Vname = false;
  Vemail = false;
  Vadress = false;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {}

  registerClient(): void {
    if (this.validatorInput()) {
      this.clientService.register(this.client).subscribe(() => {
        this.clientService.showMessage("Cadastro Concluido com Sucesso");
        this.router.navigate([""]);
      });
    }
  }
  cancelRegisterClient(): void {
    this.router.navigate([""]);
  }

  validatorInput(): boolean {
    this.Vname = this.client.name.length == 0;
    this.Vemail = this.client.email.length == 0;
    this.Vadress = this.client.adress.length == 0;
    if (!this.Vname && !this.Vemail && !this.Vadress) {
      return true;
    }
    return false;
  }
}

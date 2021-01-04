import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-data-binding",
  templateUrl: "./form-data-binding.component.html",
  styleUrls: ["./form-data-binding.component.css"]
})
export class FormDataBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  formHello(data) {
    console.log(data.username + "   " + data.pass);
  }
}

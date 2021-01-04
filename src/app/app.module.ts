import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ScrollerComponent } from "./scroller/scroller.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FormDataBindingComponent } from "./form-data-binding/form-data-binding.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ScrollerComponent,
    LoginComponent,
    RegistrationComponent,
    FormDataBindingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

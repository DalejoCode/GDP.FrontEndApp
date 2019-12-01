import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "../login/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { RegisterComponent } from "./register/register.component";
import { MzButtonModule, MzInputModule } from "ngx-materialize";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, LoginRoutingModule, MzButtonModule, MzInputModule],
  entryComponents: [LoginComponent, RegisterComponent]
})
export class LoginModule {}

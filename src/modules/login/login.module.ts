import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "../login/login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { RegisterComponent } from "./register/register.component";
import { MzButtonModule, MzInputModule } from "ngx-materialize";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, LoginRoutingModule, MzButtonModule, MzInputModule, ReactiveFormsModule, FormsModule, MatExpansionModule],
  entryComponents: [LoginComponent, RegisterComponent]
})
export class LoginModule {}

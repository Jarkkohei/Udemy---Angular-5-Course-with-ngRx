import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    AuthRoutingModule,
    FormsModule
  ]
})

export class AuthModule {}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  invalidRegister: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(form: NgForm){
    const credentials = JSON.stringify(form.value);

    this.authService.register(credentials)
    .subscribe((response: any) => {
      const token= (<any>response).token;
      console.log("token: " + token);
      localStorage.setItem("jwt",token);
      this.invalidRegister= false;
    }, () => this.invalidRegister= true); 
  }  

}


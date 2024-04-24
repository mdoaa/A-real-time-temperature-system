// login.component.ts
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string='';
  password: string='';
  

  onSubmit() {
    // Perform authentication logic here (e.g., send login request to server)
    console.log('Login clicked');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add your authentication logic here (e.g., HTTP request to a server)
    
  }
}*/
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/Main.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-Add_Data',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  Loginform: FormGroup;
  errorMessage= '';
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.Loginform = this.formBuilder.group({
      username: [''],
      password: [''],
    })
  }
  ngOnInit() { }
  onSubmit(): any {
    this.crudService.checklogin(this.Loginform.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/map'))
      }, (err) => {
        this.errorMessage= 'Invalid username or password';
        console.log(err);
    });
  }
  onsign(): any {
    this.ngZone.run(() => this.router.navigateByUrl('/signup'))
      
  }
}

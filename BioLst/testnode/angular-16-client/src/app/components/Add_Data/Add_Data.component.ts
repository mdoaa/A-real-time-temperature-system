import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/Main.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-Add_Data',
  templateUrl: './Add_Data.component.html',
  styleUrls: ['./Add_Data.component.css']
})

export class signup implements OnInit {
  signupform: FormGroup;
  errorMessage= '';
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.signupform = this.formBuilder.group({
      username: [''],
      email:[''],
      password: [''],
    })
  }
  ngOnInit() { }
  onSubmit(): any {
    this.crudService.AddUser(this.signupform.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/login'))
      }, (err) => {
        this.errorMessage= 'username or email already found';
        console.log(err);
    });
  }
}
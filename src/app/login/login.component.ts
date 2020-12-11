import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.model.email === "admin12@gmail.com" && this.model.password === "Admina11") {
      this.router.navigateByUrl('/admin');
    } else if (this.model.email === "user12@gmail.com" && this.model.password === "Usernew11") {
      this.router.navigateByUrl('/user');
    }
    else {
      alert('Invalid Credentials')
    }
  }

}

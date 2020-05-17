import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthenticationService} from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              private _authService: AuthenticationService,
              private _router: Router) {
  }

  ngOnInit(): void {
  }

  closeLogin() {
    this.dialogRef.close();
  }

  login(){
    this._authService.login(this.loginForm.value)
      .subscribe(
        () => {
          this._router.navigate(['/user-features']);
        }
      );
  }
}

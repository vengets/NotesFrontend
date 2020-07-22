import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: string;
  password: string;
  error: boolean;

  loginService: LoginService;
  router: Router;
  constructor(loginService: LoginService, router: Router) {
    this.loginService = loginService;
    this.router = router;
  }

  ngOnInit(): void {
  }

  async login() {
    this.error = !(await this.loginService.login(new User(this.id, this.password)));
    if (!this.error) {
      await this.router.navigate(['/dashboard']);
    }
  }
}

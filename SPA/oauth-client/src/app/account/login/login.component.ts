import { NgxSpinnerService } from "ngx-spinner";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/authentication/auth.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    title = "Login";
    constructor(
        private authService: AuthService,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit() {}

    login() {
        this.spinner.show();
        this.authService.login();
    }
}

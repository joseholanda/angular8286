import { Component } from "@angular/core";
import { User } from '../../models/user';

@Component({
    selector: "cmail-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css", "./header-search.css"]
})
export class HeaderComponent {
    private _isMenuOpen = false;

    user = {};
    //user = new User({nome: '', username: '', password: '', avatar: ''});

    ngOnInit() {
        this.user = new User({
            nome: localStorage.getItem('nome'),
            username: localStorage.getItem('email'),
            password: '',
            avatar: localStorage.getItem('avatar')
        });
    }

    get isMenuOpen() {
        return this._isMenuOpen;
    }

    toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen;
    }
}
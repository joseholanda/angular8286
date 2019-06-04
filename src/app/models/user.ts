export class User {

    name = '';
    username ='';
    password = '';
    phone = '1234';
    avatar = '';

    constructor({nome, username, password, avatar}) {
        this.name = nome;
        this.username = username;
        this.password = password;
        this.avatar = avatar;
    }
}

const User={
    _email:'h@hc.com',
    _password:"abc",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value1){
        this._password = value1
    }

}
const tea = Object.create(User)
console.log(tea.password)

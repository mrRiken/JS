class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const user1 = new User("rp@yahoo.com", "rik123");

function ID(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
    enumerable: false,
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
    enumerable: false,
  });
}


const User = {
    _email:"rp@yahoo.ca",
    _password:"rik1213",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
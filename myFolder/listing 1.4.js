var Person = class Person {
    constructor(ssn,firstname, lastname, birthYear = null, address = null) {
        this._ssn = ssn;
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthYear = birthYear;
        this._address = address;
    }

    get ssn() {
        return this._ssn;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(firstname) {
        this._firstname = firstname;
        return this;
    }

    get lastname() {
        return this._lastname;
    }

    get birthYear() {
        return this._birthYear;
    }

    get address() {
        return this._address;
    }

    get fullname() {
        return `${this._firstname} ${this._lastname}`;
    }
};

var _students = {
    '444-44-4444': new Person('444-44-4444', 'Alonzo', 'Church'),
    '444444444'  : new Person('444-44-4444', 'Alonzo', 'Church')
};

var db = {find: function (ssn) {
        return _students[ssn];
    }}

function showStudent(ssn) {
    let student = db.find(ssn);
    if (student !== null) {
        let studentInfo = `<p>${student.ssn},${student.firstname},${student.lastname}</p>`;
        console.log(studentInfo);
        return studentInfo;
    }
    else {
        throw new Error('Student not');
    }
}

showStudent('444-44-4444')
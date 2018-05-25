var Student8 = /** @class */ (function () {
    function Student8(firstName, middleInital, lastName) {
        this.firstName = firstName;
        this.middleInital = middleInital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInital + " " + lastName;
    }
    return Student8;
}());
var student8 = new Student8("Jane", "M.", "User");

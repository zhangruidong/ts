class Student8 {
    fullName: string;
    constructor(
        public firstName,
        public middleInital,
        public lastName
    ) {
        this.fullName = firstName+" "+ middleInital + " " +lastName
    }
}

let student8 = new Student8("Jane","M.","User")


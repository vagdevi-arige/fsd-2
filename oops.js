"use strict";
class Student {
    name;
    rollNo;
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
    }
}
let s1 = new Student("Vagdevi", 101);
s1.display();

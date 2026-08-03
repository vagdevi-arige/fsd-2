"use strict";
var College;
(function (College) {
    class Student {
        display() {
            console.log("Welcome to TypeScript Namespace");
        }
    }
    College.Student = Student;
})(College || (College = {}));
let obj = new College.Student();
obj.display();

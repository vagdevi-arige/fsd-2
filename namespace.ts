namespace College {

    export class Student {

        display() {
            console.log("Welcome to TypeScript Namespace");
        }

    }

}

let obj = new College.Student();
obj.display();
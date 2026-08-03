class Person {
    public name: string;
    private age: number;
    protected city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    display() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }
}

class Student extends Person {

    showCity() {
        console.log("City:", this.city);
    }
}

let obj = new Student("Vagdevi",20,"Hyderabad");

console.log(obj.name);


obj.showCity();
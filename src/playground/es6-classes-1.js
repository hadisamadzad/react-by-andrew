class Person {
    constructor (name = "NoName", age = 0) {
        this.name = name;
        this.age = age;
    }
    print () {
        console.log(`I am ${this.name}, ${this.age} years old.`);
    }
}

const me = new Person("Hadi");
me.print();
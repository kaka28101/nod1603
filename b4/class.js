/*function Person (name, age) {
    // body
    this.name = name;
    //age to Private
    this.getAge = function() {
        return age;
    }
    // this.getAge = () => age
    this.setAge = function (newAge) {
        return age = newAge;
    }
    // this.setAge = newAge => {age = newAge;};

}

let p1 = new Person('Minh', 99);
console.log("original: " +p1) ;
console.log(JSON.stringify(p1)) ;
console.log(p1.getAge()) ;
p1.setAge(11);
console.log(p1.getAge()) ;*/



class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this) ;
    }
}

const minh = new Person('Minh',111);
minh.show();
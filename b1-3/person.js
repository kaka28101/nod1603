function Person(name, age, address) {
    this.name = name;
    this.address = address;
    this.getAge = function() {
        return age;
    }
    this.setAge = function(newAge) {
        age = newAge;
    }
}

const minh = new Person('Minh', 18, 'gv');
console.log(minh.getAge());
minh.setAge(17);
console.log(minh.getAge());

class Person {
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
}
const arr = [
    new Person('a',18,157),
    new Person('B`',17,187),
    new Person('Cd',19,137),
    new Person('D',15,167)
]
//console.log(arr) ;

    /*FUNCTION OF ARRAY*/
/*tontai*/
//  some(boolean)
/*tatca*/
//  every(boolean)

/*const ish = arr.some(function (person) {
    // body
    return person.height > 175;
});*/

/*const ish = arr.some(person=> person.hight > 175);
//console.log(ish) ;
const is2h = arr.some((person,)=> {
    console.log(index) ;
    console.log(array) ;
    return person.hight > 175
});
console.log(is2h) ;
*/
/*find va findIndex*/
// const person = arr.find(p=> p.height>160);
// const person = arr.findIndex(p=> p.height>160);
// console.log(person) ;
/*// in ra gia tri can trong tat ca phan tu*/
//arr.forEach(ele => console.log(ele.name));
/* bo ;loc filter*/
    // const p = arr.filter(e => e.age>17);
    // console.log(p) ;
/*sap xep sort*/
const psapxepTuoi = arr.sort((a,b) => a.age-b.age );
console.log(psapxepTuoi) ;